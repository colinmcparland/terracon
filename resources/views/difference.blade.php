@extends('layouts.base')

@section('title', 'Terracon Our Difference')
@section('desc', '')

@section('content')
  @include('partials.header')
  @include('partials.difference.heading')
  @include('partials.difference.process')
  @include('partials.difference.story')
  @include('partials.difference.blurb')
  @include('partials.difference.cta')
  @include('partials.difference.leadership')
  @include('partials.difference.slider')
  @include('partials.difference.clients')
@stop