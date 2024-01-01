<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $token = $this->xAuthToken;
        $data = [
            'title' => 'Blog | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Blog/List",['token' => $token])->with($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $token = $this->xAuthToken;
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'blogCategory/blogCategoryData');
        $blogCategoryData = $response->json();
        $data = [
            'title' => 'Blog-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Blog/Add",[
            'category' => $blogCategoryData['data'],
            'token' => $token
        ])->with($data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $token = $this->xAuthToken;
        $data = [
            'id' => $id
        ];
        $metadata = [
            'title' => 'Blog-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'blog/getBlogDataById', $data);
        $data = $response->json();
        $categoryData = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'blogCategory/blogCategoryData',$data);
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Blog/Edit",[
            'category' => $categoryData['data'],
            'data' => $data['data'],
            'token' => $token
        ])->with($metadata);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $token = $this->xAuthToken;
        $data = [
            'id' => $id
        ];
        $response = Http::withHeaders([
            'x-auth-token' => $token,
        ])->post(env('NODE_BASEURL_LIVE').'blog/deleteBlogData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/blog');
        }
    }
}
