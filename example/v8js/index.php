<?php

require __DIR__ . '/../../libs/ReactJS.php';

$Layout = new ReactJS([
	'node_modules'	=> __DIR__ . '/../js/node_modules',
	'js_files'		=> __DIR__ . '/../js/bld'
]);

$Layout->entry([
	'component' => 'App',
	'require'	=> __DIR__ . '/../js/bld/app.js',
	'static'	=> true,
	'props'		=> [
		'title' => 'SSR React PHP!',
		'h2' => 'React JS render on server with PHP'
	]
]);


$MainComponent = new ReactJS([
	'node_modules'	=> __DIR__ . '/../js/node_modules',
	'js_files'		=> __DIR__ . '/../js/bld'
]);

$MainComponent->entry([
	'component' => 'MainComponent',
	'require'	=> __DIR__ . '/../js/bld/mainComponent.js'
]);


// Render static layout and React components
echo $Layout([
	'domContainerNode' => '<div id="app"></div>',
	'component' => $MainComponent
]);



#EOF#