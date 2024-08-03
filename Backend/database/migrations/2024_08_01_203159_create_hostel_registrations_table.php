<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostelManagementSystemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hostel_management_system', function (Blueprint $table) {
            $table->id();
            $table->string('name_with_initials');
            $table->string('address');
            $table->string('index_number');
            $table->string('faculty');
            $table->string('academic_year');
            $table->date('birthday');
            $table->string('department');
            $table->string('phone_number');
            $table->string('nic_number');
            $table->string('image_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hostel_management_system');
    }
};
