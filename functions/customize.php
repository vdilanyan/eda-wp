<?php
function paste_as_text($mceInit, $editor_id)
{
    $mceInit["paste_as_text"] = true;

    return $mceInit;
}

add_filter("tiny_mce_before_init", "paste_as_text", 1, 2);
