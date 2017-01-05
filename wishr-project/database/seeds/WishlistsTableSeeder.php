<?php

use Illuminate\Database\Seeder;
use App\Wishlist;

class UsersTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		Wishlist::create(array(
			'name' => 'george@foreman.com',
			'user_id' => 'George Foreman',
		));

		Wishlist::create(array(
			'email' => 'tony@thetiger.com',
			'name' => 'Tony Tiger',
			'password' => Hash::make('tonytiger')
		));

		Wishlist::create(array(
			'email' => 'fred@flintstone.com',
			'name' => 'Fred Flinstone',
			'password' => Hash::make('fredflintstone')
		));

		Wishlist::create(array(
			'email' => 'stig.vanbrabant@gmail.com',
			'name' => 'Stig Vanbrabant',
			'password' => Hash::make('secret')
		));

		Wishlist::create(array(
			'email' => 'carry@flintstone.com',
			'name' => 'Carry Goossens',
			'password' => Hash::make('carrygoossens')
		));
	}

}