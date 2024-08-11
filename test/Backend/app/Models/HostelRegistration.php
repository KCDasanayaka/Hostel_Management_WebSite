<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HostelRegistration extends Model
{
    use HasFactory;
     // Specify the fields that are mass assignable
     protected $fillable = [
        'name_with_initials',
        'email',
        'address',
        'index_number',
        'faculty',
        'academic_year',
        'birthday',
        'department',
        'phone_number',
        'nic_number',
        'image',
    ];

    // Optionally, you can define the data types of the fields
    protected $casts = [
        'birthday' => 'date',
    ];
}
