<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostelRegistrationsTable extends Migration
{
    public function up()
    {
        Schema::create('hostel_registrations', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('name');
            $table->text('address');
            $table->string('index_number');
            $table->string('faculty');
            $table->string('academic_year');
            $table->date('birthday');
            $table->string('department');
            $table->string('phone_number');
            $table->string('nic_number');
            $table->string('imgPath')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hostel_registrations');
    }
};

