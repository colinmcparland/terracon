@extends('layouts.base')

@section('title', 'Terracon - Projects')
@section('desc', '')

@section('content')
  @include('partials.header')
  @include('partials.services.heading')
  @include('partials.services.planning')
  @include('partials.services.projectmgmt')
  @include('partials.services.ownerrep')
  @include('partials.services.industries')
@stop