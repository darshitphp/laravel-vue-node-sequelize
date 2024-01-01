<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;


class Controller extends BaseController
{
    public $xAuthToken;
    use AuthorizesRequests, ValidatesRequests;

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->xAuthToken = Session::get('x-auth-token');
            // Check if the token is null
            if (is_null($this->xAuthToken)) {
                Session::forget('x-auth-token');
                Auth::logout();
                return Redirect::to('/login'); // Adjust the path as needed
            }

            return $next($request);
        });
    }
}
