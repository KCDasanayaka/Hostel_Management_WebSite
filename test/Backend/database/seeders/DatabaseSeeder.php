<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash; // Import the Hash facade

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Manually insert users into the 'users' table
        DB::table('users')->insert([
            [
                'name' => 'Alice Brown',
                'email' => 'alicebrown@example.com',
                'password' => Hash::make('password123'), // Hash the password
            ],
            [
                'name' => 'Bob Johnson',
                'email' => 'bobjohnson@example.com',
                'password' => Hash::make('password123'), // Hash the password
            ]
        ]);
    }
}
