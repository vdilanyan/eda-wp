<?php

use Timber\Timber;

$context = Timber::get_context();

$context = array_merge($context, [
    'homepage' => get_homepage_fields(),
    'see_more_text' => 'Տեսնել ավելին',
    'see_less_text' => 'Թաքցնել',
]);

Timber::render('front-page.twig', $context);
