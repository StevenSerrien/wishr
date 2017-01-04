<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\User;
use Dingo\Api\Routing\Helpers;

// use Config;

// use JWTAuth;
// use App\Http\Controllers\Controller;
// use Symfony\Component\HttpKernel\Exception\HttpException;
// use App\User;

class FriendsController extends Controller
{
	use Helpers;

    public function getUsers()
    {
    	$currentUser = JWTAuth::parseToken()->authenticate();

    	$not_friends = User::where('id', '!=', $currentUser->id);

    	if ($currentUser->friends->count()) {
	      $not_friends->whereNotIn('id', $currentUser->friends->modelKeys());
	    }

    	// $friends = User::find($currentUser->id)->friends;

    	// $user_friends = $currentUser->friends;

	    $not_friends = $not_friends->get();

	    return $not_friends;
	}

	public function addFriend($id)
	{
		$currentUser = JWTAuth::parseToken()->authenticate();
		$user = User::find($id);
		$currentUser->addFriend($user);

		return $this->response->error('added_friend', 200);
	}

	public function removeFriend($id)
	{
		$currentUser = JWTAuth::parseToken()->authenticate();
		$user = User::find($id);
		$currentUser->removeFriend($user);
		
		return $this->response->error('removed_friend', 200);
	}
}
