<?php

require __DIR__ . '/../../libs/ReactJS.php';

$rjs = new ReactJS([
	'node_modules' => __DIR__ . '/../js/node_modules'
]);

$rjs->entry([
	'component' => 'App',
	'require'	=> __DIR__ . '/../js/bld/app.js',
	'props'		=> [
		'title' => 'SSR React PHP!',
		'h2' => 'React JS render on server with PHP'
	],
	'static'	=> true
]);


echo $rjs;


#EOF#