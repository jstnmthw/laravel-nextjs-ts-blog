<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\JsonResponse;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(
            Blog::query()
                ->select([
                    'id',
                    'title',
                    'description',
                    'slug',
                    'created_at'
                ])
                ->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreBlogRequest $request
     * @return JsonResponse
     */
    public function store(StoreBlogRequest $request): JsonResponse
    {
        return response()->json([
            'success' => Blog::query()->create([
                'title' => $request->title,
                'description' => $request->description,
            ]),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Blog $blog
     * @return JsonResponse
     */
    public function show(Blog $blog): JsonResponse
    {
        return response()->json($blog);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateBlogRequest $request
     * @param Blog $blog
     * @return JsonResponse
     */
    public function update(UpdateBlogRequest $request, Blog $blog): JsonResponse
    {
        return response()->json([
            'success' => $blog::query()->update([
                'title' => $request->title,
                'description' => $request->description,
            ])
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Blog $blog
     * @return JsonResponse
     */
    public function destroy(Blog $blog): JsonResponse
    {
        return response()->json([
            'success' => $blog::query()->delete()
        ]);
    }

    public function categoryIndex(Category $category): JsonResponse
    {
        $query = $category->blogs()
            ->with('categories:id,title,slug')
            ->paginate(10);

        return response()->json($query);
    }
}
