<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Laravel</title>
</head>

<body>
    <div class="container">
        <div class="all">
            <div class="main_block">
                <div class="red active" data-color="red"></div>
                <div class="yellow" data-color="yellow"></div>
                <div class="green" data-color="green"></div>
            </div>
            <div>
                <button>Вперед</button>
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Лог проездов</th>
                </tr>
            </thead>
            <tbody class="log">
            </tbody>
        </table>
    </div>
</body>

</html>