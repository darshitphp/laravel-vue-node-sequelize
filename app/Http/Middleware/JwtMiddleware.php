<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;

class JwtMiddleware
{
    public function handle($request, Closure $next)
    {
        $token = JWTAuth::getToken();

        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        // Store the token in the session
        Session::put('jwt_token', $token);

        // Pass the token to the view or other parts of the application as needed
        view()->share('jwt_token', $token);

        return $next($request);
    }
}
