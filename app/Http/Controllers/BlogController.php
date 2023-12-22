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
        $data = [
            'title' => 'Blog | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Blog/List")->with($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $response = Http::post(env('NODE_BASEURL_LOCAL').'blogCategory/blogCategoryData');
        $blogCategoryData = $response->json();
        $data = [
            'title' => 'Blog-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/Blog/Add",[
            'category' => $blogCategoryData['data']
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
        $data = [
            'id' => $id
        ];
        $metadata = [
            'title' => 'Blog-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'blog/getBlogDataById', $data);
        $data = $response->json();
        $categoryData = Http::post(env('NODE_BASEURL_LOCAL').'blogCategory/blogCategoryData',$data);
        //Loading component with proper file structure managable
        return Inertia::render("Admin/Blog/Edit",[
            'category' => $categoryData['data'],
            'data' => $data['data'],
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
        $data = [
            'id' => $id
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'blog/deleteBlogData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/blog');
        }
    }
}
