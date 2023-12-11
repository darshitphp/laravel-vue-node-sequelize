<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('name');
            $table->string('url');
            $table->string('contact_info');
            $table->string('country');
            $table->string('state');
            $table->string('timezone');
            $table->string('recpatcha_status');
            $table->string('recpatcha_private');
            $table->string('recpatcha_public');
            $table->enum('recpatcha_type',['v2_robot_checkbox','v2_invisible','v3_invisible']);
            $table->string('smtp_host');
            $table->integer('smtp_port');
            $table->enum('smtp_secure_type',['SSL','TLS']);
                $table->string('username');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
