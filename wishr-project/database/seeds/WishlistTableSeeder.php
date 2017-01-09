<?php

use Illuminate\Database\Seeder;

use App\Wishlist;

class WishlistTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		Eloquent::unguard();

		Wishlist::create(array(
			'name' => 'Birthday',
			'user_id' => 1,
		));

		Wishlist::create(array(
			'name' => 'Christmas',
			'user_id' => 1,
		));

		Wishlist::create(array(
			'name' => 'My Wishlist',
			'user_id' => 1,
		));

		Wishlist::create(array(
			'name' => 'Birthday',
			'user_id' => 2,
		));

		Wishlist::create(array(
			'name' => 'Christmas',
			'user_id' => 2,
		));

		Wishlist::create(array(
			'name' => 'My Wishlist',
			'user_id' => 2,
		));

		Wishlist::create(array(
			'name' => 'Birthday',
			'user_id' => 3,
		));

		Wishlist::create(array(
			'name' => 'Christmas',
			'user_id' => 3,
		));

		Wishlist::create(array(
			'name' => 'My Wishlist',
			'user_id' => 3,
		));

		Wishlist::create(array(
			'name' => 'Birthday',
			'user_id' => 4,
		));

		Wishlist::create(array(
			'name' => 'Christmas',
			'user_id' => 4,
		));

		Wishlist::create(array(
			'name' => 'My Wishlist',
			'user_id' => 4,
		));

    }
}
