<!DOCTYPE html>
<html>
<head>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>@yield('title')</title>
  <meta name='description'>@yield('description')</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
  <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</head>
<body>
  <div class="page">
    @include('partials.header')
    @yield('content')
    @include('partials.footer')
  </div>
</body>
</html>