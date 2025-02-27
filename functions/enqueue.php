<?php
function enqueue_assets(): void {
	wp_enqueue_style('stylecss', get_stylesheet_uri());
	wp_enqueue_script('functions', get_template_directory_uri() . '/assets/js/functions.js', '', '', true);

    $gallery = get_field('gallery', 'option');

	wp_localize_script('functions', 'wp_var',
		[
			'ajax_url' => admin_url('admin-ajax.php'),
            'gallery' => json_encode($gallery),
		]
	);
}
add_action('wp_enqueue_scripts', 'enqueue_assets');
