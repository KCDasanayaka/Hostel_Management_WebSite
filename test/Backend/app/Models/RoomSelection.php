<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomSelection extends Model
{
    use HasFactory;

    protected $table = 'room_selection';

    protected $fillable = [
        'hostel_name',
        'room_number',
        'user1_index',
        'user1_name',
        'user2_index',
        'user2_name',
        'user3_index',
        'user3_name',
        'user4_index',
        'user4_name',
    ];
}
