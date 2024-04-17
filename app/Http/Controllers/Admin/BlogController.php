<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();  
        return Inertia::render('Admin/blogs/index', [
            'blogs' => $blogs,  
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Admin/blogs/create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request )
    {

        $request->validate([
            'title' => 'required',
            'date' => 'required',
            'description' => 'required',
            // 'photopath' => 'required',
        ]);
      

       



        // //file name with extentsion
        // $filenameWithExt_image = $request->file('photopath')->getClientOriginalName();
        // //only file name
        // $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
        // //only extension
        // $extension_image = $request->file('photopath')->getClientOriginalExtension();
        // //file name to store
        // $image = $filename_image . '_' . time() . '.' . $extension_image;

        // //Move file to desired location
        // $path = $request->file('photopath')->move('img/blogs/', $image);
        // $data['photopath'] = $image;

        Blog::create($request);
        return redirect(route('blog.index'))->with('success', 'Blog Created Successfully');
       
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
    public function edit(Blog $blog)
    {
        return view('admin.blog.edit', compact('blog'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog ,$id)
    {
        $data = $request->validate([
            'title' => 'required',
            'date' => 'required',
            'description' => 'required',
            'photopath' => 'nullable',
        ]);

        $blog = Blog::find($id);
        if ($request->hasFile('photopath')) {
            //file name with extentsion
            $filenameWithExt_image = $request->file('photopath')->getClientOriginalName();
            //only file name
            $filename_image = pathinfo($filenameWithExt_image, PATHINFO_FILENAME);
            //only extension
            $extension_image = $request->file('photopath')->getClientOriginalExtension();
            //file name to store
            $image = $filename_image . '_' . time() . '.' . $extension_image;
            //Move file to desired location
            $path = $request->file('photopath')->move('img/blogs/', $image);
            File::delete(public_path("img/blogs/" . $blog->photopath));
            $data['photopath'] = $image;
        }
        $blog->update($data);
        return redirect(route('blog.index'))->with('success', 'Blog Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }

    public function delete(Request $request)
    {
        $blog = Blog::find($request->input('dataid'));
        File::delete(public_path("img/blogs/" . $blog->photopath));
        $blog->delete();
        return back()->with('success', 'Blog Deleted Successfully');
    }
}
