<?php

require __DIR__ . '/../../libs/ReactJS.php';

$rjs = new ReactJS([
	'node_modules' => __DIR__ . '/../js/node_modules'
]);

$rjs->entry([
	'component' => 'MainComponent',
	'require'	=> __DIR__ . '/../js/bld/mainComponent.js',
	'props'		=> ['title' => 'SSR React PHP!']
]);

echo $rjs;


#EOF#