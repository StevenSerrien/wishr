<?php

use Dingo\Api\Routing\Router;

/** @var Router $api */
$api = app(Router::class);

$api->version('v1', function (Router $api) {

    $api->get('findfriends', 'App\Api\V1\Controllers\FriendsController@getUsers');
    $api->get('addfriend/{id}', 'App\Api\V1\Controllers\FriendsController@addFriend');
    $api->get('removefriend/{id}', 'App\Api\V1\Controllers\FriendsController@removeFriend');

    $api->group(['prefix' => 'auth'], function(Router $api) {
        $api->post('signup', 'App\\Api\\V1\\Controllers\\SignUpController@signUp');
        $api->post('login', 'App\\Api\\V1\\Controllers\\LoginController@login');

        $api->post('recovery', 'App\\Api\\V1\\Controllers\\ForgotPasswordController@sendResetEmail');
        $api->post('reset', 'App\\Api\\V1\\Controllers\\ResetPasswordController@resetPassword');
    });

    $api->group(['middleware' => 'api.auth'], function ($api) {
        $api->post('item/store', 'App\Api\V1\Controllers\ItemController@store');
        $api->get('item', 'App\Api\V1\Controllers\ItemController@index');

        $api->post('wishlist/store', 'App\Api\V1\Controllers\WishlistController@store');
        $api->get('wishlist', 'App\Api\V1\Controllers\WishlistController@index');
        $api->put('wishlist/update/{id}', 'App\Api\V1\Controllers\WishlistController@update');
        $api->delete('wishlist/delete/{id}', 'App\Api\V1\Controllers\WishlistController@destroy');
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

