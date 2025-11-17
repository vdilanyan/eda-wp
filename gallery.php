<?php
/**
 * Template Name: Gallery Album
 */

use Timber\Timber;

$context = Timber::get_context();

$context = array_merge($context, [
    'title' => get_the_title(),
    'description' => get_field('description'),
    'album' => get_field('gallery_album'),
]);

Timber::render('templates/gallery.twig', $context);
