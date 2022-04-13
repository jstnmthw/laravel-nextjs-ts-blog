<?php

namespace App\Observers;

use App\Models\Blog;
use Illuminate\Support\Str;

class BlogObserver
{
    /**
     * Handle the Blog "created" event.
     *
     * @param Blog $blog
     * @return void
     */
    public function created(Blog $blog)
    {
        $blog->update([
           'slug' => Str::slug($blog->title) . '-' . $blog->getKey()
        ]);
    }

    /**
     * Handle the Blog "updated" event.
     *
     * @param Blog $blog
     * @return void
     */
    public function updated(Blog $blog)
    {
        if (!$blog->wasRecentlyCreated) {
            $blog->update([
                'slug' => Str::slug($blog->title) . '-' . $blog->getKey()
            ]);
        }
    }

    /**
     * Handle the Blog "deleted" event.
     *
     * @param Blog $blog
     * @return void
     */
    public function deleted(Blog $blog)
    {
        //
    }

    /**
     * Handle the Blog "restored" event.
     *
     * @param Blog $blog
     * @return void
     */
    public function restored(Blog $blog)
    {
        //
    }

    /**
     * Handle the Blog "force deleted" event.
     *
     * @param Blog $blog
     * @return void
     */
    public function forceDeleted(Blog $blog)
    {
        //
    }
}
