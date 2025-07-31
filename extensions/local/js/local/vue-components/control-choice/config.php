<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'js' => [
		'./dist/component.bundle.js',
	],
	'rel' => [
		'main.polyfill.core',
		'local.vue-components.control-subcontrol',
		'local.vue-components.control-multi',
		'local.vue-components.control-multi-sub',
		'local.vue-components.control-component',
	],
	'skip_core' => true,
];