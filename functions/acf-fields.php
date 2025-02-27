<?php
if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
        'page_title'    => 'Options',
        'menu_title'    => 'Global Settings',
        'menu_slug'     => 'global-general-settings',
        'icon_url'      => 'dashicons-images-alt2',
        'capability'    => 'edit_posts',
        'redirect'      => false,
    ]);
}
