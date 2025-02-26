<?php
add_theme_support("post-thumbnails"); 
add_image_size("blog-thumb", 200, 200, true); //(width, height, crop)

function translate_static_text($en, $am = '', $ru = '')
{
	if (!empty($am) && ICL_LANGUAGE_CODE === 'hy') {
		return $am;
	}

	if (!empty($ru) && ICL_LANGUAGE_CODE === 'ru') {
		return $ru;
	}

	return $en;
}
