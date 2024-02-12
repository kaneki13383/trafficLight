<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;

class LogController extends Controller
{
    // Функция вывода
    public function show(){
        $log = Log::all('text');
        return $log; 
    }
    // Функция добавления в бд
    public function store(Request $request){
        $message = $request->input('message');

        Log::create([
            'text' => $message
        ]);
        
        $arr = Log::get()->last();

        return $arr;
    }
}
