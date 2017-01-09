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
			'password' => bcrypt('georgeforeman')
		));

		User::create(array(
			'email' => 'tony@thetiger.com',
			'name' => 'Tony Tiger',
			'password' => bcrypt('tonytiger')
		));

		User::create(array(
			'email' => 'fred@flintstone.com',
			'name' => 'Fred Flinstone',
			'password' => bcrypt('fredflintstone')
		));

		User::create(array(
			'email' => 'stig.vanbrabant@gmail.com',
			'name' => 'Stig Vanbrabant',
			'password' => bcrypt('secret')
		));

		User::create(array(
			'email' => 'carry@flintstone.com',
			'name' => 'Carry Goossens',
			'password' => bcrypt('carrygoossens')
		));

		User::create(array(
			'email' => 'gerry.gerald@gerald.com',
			'name' => 'Gerry gerald',
			'password' => bcrypt('gerrygerald')
		));

		User::create(array(
			'email' => 'bambi@thetiger.com',
			'name' => 'Melissa Holmes',
			'password' => bcrypt('bambi')
		));

		User::create(array(
			'email' => 'freddy.verelst@verelst.com',
			'name' => 'Freddy Verelst',
			'password' => bcrypt('freddyverelst')
		));

		User::create(array(
			'email' => 'karel.bouwmans@gmail.com',
			'name' => 'Karel Bouwmans',
			'password' => bcrypt('karelbouwmans')
		));

		User::create(array(
			'email' => 'galberreke.goossens@flintstone.com',
			'name' => 'Galberreke Goossens',
			'password' => bcrypt('galberrekegoossens')
		));
	}

}