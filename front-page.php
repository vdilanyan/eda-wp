<?php

use Timber\PostQuery;
use Timber\Timber;

$context = Timber::get_context();

$albums = get_posts([
    'numberposts' => -1,
    'post_type' => 'page',
    'post_status' => 'publish',
    'orderby' => 'menu_order',
    'order' => 'ASC',
    'meta_key' => '_wp_page_template',
    'meta_value' => 'gallery.php',
    'suppress_filters' => false,
    'lang' => apply_filters('wpml_current_language', null),
]);

$context = array_merge($context, [
    'homepage' => get_homepage_fields(),
    'see_more_text' => translate_static_text('See more', 'Տեսնել ավելին'),
    'see_less_text' => translate_static_text('See less', 'Թաքցնել'),
    'albums' => new PostQuery($albums),
]);

Timber::render('front-page.twig', $context);
