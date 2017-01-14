<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = ['name', 'category', 'url', 'price', 'rating' ];

    public function photo()
    {
        return $this->hasMany('App\Photo');
    }
}
