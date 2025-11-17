<?php
function enqueue_assets(): void {
    wp_enqueue_style('stylecss', get_stylesheet_uri());

    $gallery = get_field('gallery_album', get_queried_object_id());

    if (is_page_template('gallery.php')) {
        wp_enqueue_script('lightbox', get_template_directory_uri() . '/assets/js/lightbox.js', '', '', true);

        wp_localize_script('lightbox', 'wp_var',
            [
                'ajax_url' => admin_url('admin-ajax.php'),
                'gallery' => json_encode($gallery),
            ]
        );
    }

    if (!is_page_template('gallery.php')) {
        wp_enqueue_script('functions', get_template_directory_uri() . '/assets/js/functions.js', '', '', true);
    }
}
add_action('wp_enqueue_scripts', 'enqueue_assets');
