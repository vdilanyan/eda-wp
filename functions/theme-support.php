<?php
add_theme_support("post-thumbnails"); 
add_image_size("blog-thumb", 200, 200, true);

function get_homepage_fields(): array
{
    return [
        'hero_background_image' => get_field('hero_background', 'option'),
        'title' => get_field('title'),
        'about_me_title' => get_field('about_me_title'),
        'about_me_image' => get_field('about_me_image', 'option'),
        'about_me_description' => get_field('about_me_description'),
        'gallery_title' => get_field('gallery_title'),
        'gallery' => get_field('gallery', 'option'),
        'videos' => get_field('videos', 'option'),
        'videos_title' => get_field('videos_title'),
    ];
}
