<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HostelRegistration extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'address',
        'index_number',
        'faculty',
        'academic_year',
        'birthday',
        'department',
        'phone_number',
        'nic_number',
        'imgPath',
    ];

    // Define the table name if it does not follow Laravel's naming convention
    protected $table = 'hostel_registrations';
}
