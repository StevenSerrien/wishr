<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    use Helpers;

    public function index()
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();
	    return $currentUser
	        ->items()
	        ->get()
	        ->toArray();
	}

    public function store(Request $request)
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();

	    $userWishlist = $currentUser->wishlist()->find($id);

	    $item = new Item;

	    $item->name = $request->get('name');
	    $item->category = $request->get('category');

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

	    if($wishlist->save())
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
