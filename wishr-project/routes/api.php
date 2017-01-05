<?php

use Dingo\Api\Routing\Router;

/** @var Router $api */
$api = app(Router::class);

$api->version('v1', function (Router $api) {



    $api->post('searchuser', 'App\Api\V1\Controllers\FriendsController@searchUsers');


    $api->group(['prefix' => 'auth'], function(Router $api) {
        $api->post('signup', 'App\\Api\\V1\\Controllers\\SignUpController@signUp');
        $api->post('login', 'App\\Api\\V1\\Controllers\\LoginController@login');

        $api->post('recovery', 'App\\Api\\V1\\Controllers\\ForgotPasswordController@sendResetEmail');
        $api->post('reset', 'App\\Api\\V1\\Controllers\\ResetPasswordController@resetPassword');
    });

    $api->group(['middleware' => 'api.auth'], function ($api) {
        $api->post('item/store/{id}', 'App\Api\V1\Controllers\ItemController@store');
        $api->get('item', 'App\Api\V1\Controllers\ItemController@index');
        $api->get('item/show/{id}', 'App\Api\V1\Controllers\ItemController@show');

        $api->post('wishlist/store', 'App\Api\V1\Controllers\WishlistController@store');
        $api->get('wishlist', 'App\Api\V1\Controllers\WishlistController@index');
        $api->put('wishlist/update/{id}', 'App\Api\V1\Controllers\WishlistController@update');
        $api->delete('wishlist/delete/{id}', 'App\Api\V1\Controllers\WishlistController@destroy');
        $api->get('wishlist/show/{id}', 'App\Api\V1\Controllers\WishlistController@show');


        $api->get('user', function () {
          //get all user info
          return JWTAuth::parseToken()->authenticate();
        });
        $api->get('findfriends', 'App\Api\V1\Controllers\FriendsController@getUsers');
        $api->get('friends/show', 'App\Api\V1\Controllers\FriendsController@show');
        $api->get('addfriend/{id}', 'App\Api\V1\Controllers\FriendsController@addFriend');
        $api->get('removefriend/{id}', 'App\Api\V1\Controllers\FriendsController@removeFriend');
    });

    $api->group(['middleware' => 'jwt.auth'], function(Router $api) {
        $api->get('protected', function() {
            return response()->json([
                'message' => 'Access to this item is only for authenticated user. Provide a token in your request!'
            ]);
        });

        $api->get('refresh', [
            'middleware' => 'jwt.refresh',
            function() {
                return response()->json([
                    'message' => 'By accessing this endpoint, you can refresh your access token at each request. Check out this response headers!'
                ]);
            }
        ]);
    });

    $api->get('hello', function() {
        return response()->json([
            'message' => 'This is a simple example of item returned by your APIs. Everyone can see it.'
        ]);
    });
});

