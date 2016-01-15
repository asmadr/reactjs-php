<?php

require __DIR__ . '/../../libs/ReactJS.php';

define('NODE_MODULES', __DIR__ . '/../js/node_modules');
define('JS_DIR', __DIR__ . '/../js/bld');

$config = [
	'node_modules'	=> NODE_MODULES,
	'js_files'		=> JS_DIR
];

$Layout = new ReactJS($config);

$Layout->entry([
	'component' => 'App',
	'require'	=> JS_DIR . '/app.js',
	'static'	=> true,
	'props'		=> [
		'title' => 'SSR React PHP!',
		'h2' => 'React JS render on server with PHP'
	]
]);


$MainComponent = new ReactJS($config);

$MainComponent->entry([
	'component' => 'MainComponent',
	'require'	=> JS_DIR . '/mainComponent.js'
]);


// Render static layout and React components
echo $Layout([
	'domContainerNode' => '<div id="app"></div>',
	'component' => $MainComponent
]);



#EOF#