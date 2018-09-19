<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/our-difference', function () {
    return view('difference');
});

Route::get('/project', function () {
    return view('project');
});

Route::get('/case-study', function () {
    return view('casestudy');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/industry/*', function () {
    return view('industry');
});

Route::get('/press', function () {
    return view('press');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/careers', function () {
    return view('careers');
});
