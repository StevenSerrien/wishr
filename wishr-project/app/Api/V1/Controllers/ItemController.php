<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\Item;
use App\Wishlist;
use App\User;
use Dingo\Api\Routing\Helpers;

class ItemController extends Controller
{
    use Helpers;

    public function index()
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();
	    $userWishlist = $currentUser->wishlist()->first();
	    return $userWishlist
	        ->item()
	        ->get()
	        ->toArray();
	}

	public function show($id){
		$currentUser = JWTAuth::parseToken()->authenticate();

		$wishlist = Wishlist::find($id);

		return $wishlist
	        ->item()
	        ->get()
	        ->toArray();
	}

    public function store(Request $request, $id)
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();

	    $wishlist = Wishlist::find($id);

	    $wishlistUserID = $wishlist->user_id;

	    $wishlistOwner = User::find($wishlistUserID);

	    $item = new Item;  

	    $item->name = $request->get('name');
	    $item->category = $request->get('category');
	    $item->user_id = $currentUser->id;

	    if($wishlist->item()->save($item))
	        return $this->response->created();
	    
	    else
	        return $this->response->error('could_not_create_item', 500);
	}

}
