<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wishlist extends Model
{
    protected $fillable = ['name', 'user_id'];

    public function item()
    {
        return $this->hasMany('App\Item');
    }

}
