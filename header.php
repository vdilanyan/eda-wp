<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php echo wp_get_document_title(); ?></title>
        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
        <link rel='preconnect' href='https://fonts.googleapis.com'/>
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin/>
        <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400&family=Open+Sans:wght@400&family=Noto+Sans+Armenian&family=Noto+Serif+Armenian&display=swap'
            rel='stylesheet'
        />
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>><?php
        use Timber\Timber;

        $context = Timber::get_context();

        Timber::render('layout/header.twig', $context); ?>

        <main role="main">
