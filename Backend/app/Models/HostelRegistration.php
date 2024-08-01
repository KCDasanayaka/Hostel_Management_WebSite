<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HostelRegistration extends Model
{
    use HasFactory;

    protected $table = 'hostel_registrations';
    protected $primaryKey = 'email';
    public $incrementing = false; // Primary key is not an auto-incrementing integer

    protected $fillable = [
        'email',
        'name_with_initials',
        'address',
        'index_number',
        'faculty',
        'academic_year',
        'birthday',
        'department',
        'phone_number',
        'nic_number',
    ];
}