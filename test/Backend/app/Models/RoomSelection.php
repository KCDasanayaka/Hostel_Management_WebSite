<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomSelection extends Model
{
    use HasFactory;

    // The table associated with the model.
    protected $table = 'room_selection';

    // The attributes that are mass assignable.
    protected $fillable = [
        'hostel_name',
        'room_number',
        'name_with_initials',
        'index_number',
    ];
}
