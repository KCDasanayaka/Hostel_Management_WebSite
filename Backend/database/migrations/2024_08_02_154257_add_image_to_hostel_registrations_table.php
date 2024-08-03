<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddImageToHostelRegistrationsTable extends Migration
{
    public function up()
    {
        Schema::table('hostel_registrations', function (Blueprint $table) {
            $table->string('image')->nullable()->after('nic_number');
        });
    }

    public function down()
    {
        Schema::table('hostel_registrations', function (Blueprint $table) {
            $table->dropColumn('image');
        });
    }
}
