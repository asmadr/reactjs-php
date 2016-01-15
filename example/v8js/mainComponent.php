<?php

require __DIR__ . '/../../libs/ReactJS.php';

$rjs = new ReactJS([
	'node_modules'	=> __DIR__ . '/../js/node_modules',
	'js_files'		=> __DIR__ . '/../js/bld'
]);

$rjs->entry([
	'component' => 'MainComponent',
	'require'	=> __DIR__ . '/../js/bld/mainComponent.js'
]);

echo $rjs;


#EOF#