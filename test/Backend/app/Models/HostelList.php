<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HostelList extends Model
{
    protected $table = 'hostel-list';
    protected $primaryKey = 'department';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'faculty',
        'department',
        'room_count',
        'academic_year',
        'hostel_name' ,
    ];
}
