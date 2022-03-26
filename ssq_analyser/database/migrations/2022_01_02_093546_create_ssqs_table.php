<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Institution;
class CreateSsqsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('SSQs', function (Blueprint $table) {
            $table->id();
           // $table->string('key')->unique();
            $table->foreignIdFor(Institution::class);
            $table->string('Programme');
            $table->json('GoalsAndObjectives');
            $table->json('Curriculum');
            $table->json('Laboratories');
            $table->json('Classrooms');
            $table->json('Library');
            $table->json('TeachingStaff');
            $table->json('ServiceStaff');
            $table->json('TechnicalStaff');
            $table->json('HOD');
            $table->json('StaffOffices');
            $table->json('AdministrativeStaff');
            $table->json('Recommendations');
            $table->json('MajorDeficiencies');
            $table->json('MinorDeficiencies');
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
        Schema::dropIfExists('ssqs');
    }
}
