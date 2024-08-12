<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostelListTable extends Migration
{
    public function up()
    {
        Schema::create('hostel-list', function (Blueprint $table) {
            $table->string('faculty');
            $table->string('department')->primary();
            $table->integer('room_count');
            $table->string('academic_year');
            $table->string('hostel_name');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hostel-list');
    }
}
