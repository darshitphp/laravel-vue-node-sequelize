<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class BlogCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $metadata = [
            'title' => 'Blog-Category | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        //Loading component with proper file structure managable
        return Inertia::render("Admin/BlogCategory/List")->with($metadata);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $response = Http::post(env('NODE_BASEURL_LOCAL').'blogCategory/blogCategoryData');
        $data = $response->json();
        $metadata = [
            'title' => 'Blog-Category-Add | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        return Inertia::render("Admin/BlogCategory/Add",[
            'data' => $data['data']
        ])->with($metadata);
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
    public function show(BlogCategory $blogCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $metadata = [
            'title' => 'Blog-Category-Edit | AdornCommerce',
            'description' => 'AdornCommerce Top Magento Development Agency',
        ];
        $data = [
            'id' => $id
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'blogCategory/getBlogCategoryDataById', $data);
        $categoryData = Http::post(env('NODE_BASEURL_LOCAL').'blogCategory/blogCategoryData',$data);
        $data = $response->json();
        //Loading component with proper file structure managable
        return Inertia::render("Admin/BlogCategory/Edit",[
            'category' => $categoryData['data'],
            'data' => $data['data'],
        ])->with($metadata);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BlogCategory $blogCategory)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $data = [
            'id' => $id
        ];
        $response = Http::post(env('NODE_BASEURL_LOCAL').'blogCategory/deleteBlogCategoryData', $data);
        unset($data);
        $data = $response->json();
        if($data['code']  == 200){
            return redirect('/blog-category');
        }
    }
}
