<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function verifyToken(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            // Token is valid, do something with $user
            return response()->json(['message' => 'Token is valid']);
        } catch (\Exception $e) {
            // Token is invalid
            return response()->json(['message' => 'Token is invalid'], 401);
        }
    }
}
