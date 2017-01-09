<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\Wishlist;
use App\User;
use Dingo\Api\Routing\Helpers;

class WishlistController extends Controller
{
    use Helpers;

    public function index()
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();

	    $userWishlists = $currentUser->wishlist()->get();

	    $response = array();

	    if (count($userWishlists) > 0) {
	    foreach ($userWishlists as $key) {
	    	foreach ($key->item as $item) {
	    		$user = $item->user_id;
	    	}
	    }

	    array_push($response, $user, $userWishlists);	

	    return $response;
		}
		else {
			return $userWishlists;
		}

	    

	    
	}

	public function show($id)
	{
		$userWishlists = User::find($id);

	    return $userWishlists
	        ->wishlist()
	        ->get()
	        ->toArray();
	}

    public function store(Request $request)
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();

	    $wishlist = new Wishlist;

	    $wishlist->name = $request->get('name');

	    if($currentUser->wishlist()->save($wishlist))
	        return $this->response->created();
	    
	    else
	        return $this->response->error('could_not_create_wishlist', 500);
	    
	}

	public function update(Request $request, $id)
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();

	    $wishlist = $currentUser->wishlist()->find($id);
	    
	    if(!$wishlist)
	        throw new NotFoundHttpException;

	    $wishlist->fill($request->all());

	    if($wishlist->update())
	        return $this->response->noContent();
	    else
	        return $this->response->error('could_not_update_wishlist', 500);
	}

	public function destroy($id)
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();

	    $wishlist = $currentUser->wishlist()->find($id);

	    if(!$wishlist)
	        throw new NotFoundHttpException;

	    if($wishlist->delete())
	        return $this->response->noContent();
	    else
	        return $this->response->error('could_not_delete_wishlist', 500);
	}
}
