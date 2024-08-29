<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HostelList extends Model
{
    protected $table = 'hostel_lists';  // Adjust this if your table name is different

    protected $fillable = [
        'faculty',
        'department',
        'room_count',
        'academic_year',
        'hostel_name',
        'gender',
    ];
}
