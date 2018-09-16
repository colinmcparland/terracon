@extends('layouts.base')

@section('title', 'Terracon')
@section('desc', '')

@section('content')
  @include('partials.home.slider')
  @include('partials.header')
  @include('partials.home.content_area_1')
  @include('partials.home.featured_projects')
  @include('partials.home.services')
  @include('partials.home.industries')
  @include('partials.home.clients')
  @include('partials.home.news')
@stop