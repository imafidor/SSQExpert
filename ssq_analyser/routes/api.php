<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SSQController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('GoalsAndObjectives',[SSQController::class,'index']);
Route::get('Laboratories',[SSQController::class,'labs']);
Route::get('GetEquipments',[SSQController::class,'getLabEquipments']);
Route::get('GetCoreSpecializations',[SSQController::class,'getCoreSpecializations']);
Route::get('GetRelatedCourses',[SSQController::class,'getRelatedCourses']);
Route::get('GetServiceCourses',[SSQController::class,'getServiceCourses']);
Route::get('GetServiceTitles',[SSQController::class,'getServiceTitles']);