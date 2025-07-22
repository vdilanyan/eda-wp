<?php

use Timber\Timber;

$context = Timber::get_context();

$context = array_merge($context, [
    'homepage' => get_homepage_fields(),
    'see_more_text' => 'See more',
    'see_less_text' => 'See less',
]);

Timber::render('front-page.twig', $context);
