<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'register_id', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
