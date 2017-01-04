<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		User::create(array(
			'email' => 'george@foreman.com',
			'name' => 'George Foreman',
			'password' => Hash::make('georgeforeman')
		));

		User::create(array(
			'email' => 'tony@thetiger.com',
			'name' => 'Tony Tiger',
			'password' => Hash::make('tonytiger')
		));

		User::create(array(
			'email' => 'fred@flintstone.com',
			'name' => 'Fred Flinstone',
			'password' => Hash::make('fredflintstone')
		));

		User::create(array(
			'email' => 'stig.vanbrabant@gmail.com',
			'name' => 'Stig Vanbrabant',
			'password' => Hash::make('secret')
		));

		User::create(array(
			'email' => 'carry@flintstone.com',
			'name' => 'Carry Goossens',
			'password' => Hash::make('carrygoossens')
		));
	}

}