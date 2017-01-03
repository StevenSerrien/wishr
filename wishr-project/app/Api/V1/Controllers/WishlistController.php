<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\Wishlist;
use Dingo\Api\Routing\Helpers;

class WishlistController extends Controller
{
    use Helpers;

    public function index()
	{
	    $currentUser = JWTAuth::parseToken()->authenticate();
	    return $currentUser
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