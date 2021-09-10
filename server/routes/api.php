<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Notes
Route::post('notes',[\App\Http\Controllers\ApiController::class,'addNote']);
Route::get('notes',[\App\Http\Controllers\ApiController::class,'notes']);
Route::delete('notes/{id}',[\App\Http\Controllers\ApiController::class,'deleteNote']);

// Tags
Route::get('tags',[\App\Http\Controllers\ApiController::class,'getTags']);
Route::post('tags',[\App\Http\Controllers\ApiController::class,'addTag']);
Route::delete('tags/{id}',[\App\Http\Controllers\ApiController::class,'deleteTag']);
