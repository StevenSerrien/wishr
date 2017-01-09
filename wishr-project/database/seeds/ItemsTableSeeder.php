<?php

use Illuminate\Database\Seeder;
use App\Item;

class ItemsTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		Item::create(array(
			'name' => 'Untitled Unmastered LP - Kendrick Lamar',
			'category' => 'Music',
			'url' => 'http://www.nl.fnac.be/a9629745/Kendrick-Lamar-Untitled-Unmastered-Lp-vinylplaten',
			'price' => '25.99',
			'rating' => 4,
			'user_id' => 1,
			'wishlist_id' => 1
		));

		Item::create(array(
			'name' => 'To Pimp A Butterfly LP - Kendrick Lamar',
			'category' => 'Music',
			'url' => 'http://www.nl.fnac.be/a8938149/Kendrick-Lamar-To-Pimp-A-Butterfly-2LP-Lp-vinylplaten',
			'price' => '21.06',
			'rating' => 4,
			'user_id' => 2,
			'wishlist_id' => 1
		));

		Item::create(array(
			'name' => 'The Departed',
			'category' => 'Movies',
			'url' => 'http://www.nl.fnac.be/a8571945/The-Departed-Blu-Ray',
			'price' => '15.99',
			'rating' => 4,
			'user_id' => 3,
			'wishlist_id' => 1
		));

		Item::create(array(
			'name' => 'Mr. Robot Season 2',
			'category' => 'Series',
			'url' => 'http://www.nl.fnac.be/a10243320/Mr-Robot-S2-Blu-Ray',
			'price' => '36.99',
			'rating' => 4,
			'user_id' => 1,
			'wishlist_id' => 1
		));

		Item::create(array(
			'name' => 'Harry Potter en Het Vervloekte Kind Deel Een en Twee',
			'category' => 'Series',
			'url' => 'https://www.bol.com/nl/p/harry-potter-vervloekte-kind-deel-twee/9200000059824504',
			'price' => '36.99',
			'rating' => 4,
			'user_id' => 5,
			'wishlist_id' => 1
		));

		Item::create(array(
			'name' => 'Untitled Unmastered LP - Kendrick Lamar',
			'category' => 'Music',
			'url' => 'http://www.nl.fnac.be/a9629745/Kendrick-Lamar-Untitled-Unmastered-Lp-vinylplaten',
			'price' => '25.99',
			'rating' => 4,
			'user_id' => 8,
			'wishlist_id' => 4
		));

		Item::create(array(
			'name' => 'To Pimp A Butterfly LP - Kendrick Lamar',
			'category' => 'Music',
			'url' => 'http://www.nl.fnac.be/a8938149/Kendrick-Lamar-To-Pimp-A-Butterfly-2LP-Lp-vinylplaten',
			'price' => '21.06',
			'rating' => 4,
			'user_id' => 2,
			'wishlist_id' => 7
		));

		Item::create(array(
			'name' => 'The Departed',
			'category' => 'Movies',
			'url' => 'http://www.nl.fnac.be/a8571945/The-Departed-Blu-Ray',
			'price' => '15.99',
			'rating' => 4,
			'user_id' => 2,
			'wishlist_id' => 8
		));

		Item::create(array(
			'name' => 'Mr. Robot Season 2',
			'category' => 'Series',
			'url' => 'http://www.nl.fnac.be/a10243320/Mr-Robot-S2-Blu-Ray',
			'price' => '36.99',
			'rating' => 4,
			'user_id' => 8,
			'wishlist_id' => 8
		));

		Item::create(array(
			'name' => 'Harry Potter en Het Vervloekte Kind Deel Een en Twee',
			'category' => 'Series',
			'url' => 'https://www.bol.com/nl/p/harry-potter-vervloekte-kind-deel-twee/9200000059824504',
			'price' => '36.99',
			'rating' => 4,
			'user_id' => 9,
			'wishlist_id' => 10
		));

	}

}