<?php

use Timber\Timber;

$context = Timber::get_context();

$context = array_merge($context, [
    'homepage' => get_homepage_fields(),
]);

Timber::render('front-page.twig', $context);
