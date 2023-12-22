<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckUserAuthenticationMiddleware
{
    public function handle($request, Closure $next)
    {
        if (Auth::check()) {
            // User is authenticated
            return $next($request);
        }

        // User is not authenticated
        return response()->json([
            'message' => 'Unauthorized',
        ], 401);
    }
}
?>