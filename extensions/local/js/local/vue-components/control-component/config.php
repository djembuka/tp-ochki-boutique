<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

return [
	'js' => [
		'./dist/component.bundle.js',
	],
	'css' => [
		'./dist/component.bundle.css',
	],
	'rel' => [
		'main.polyfill.core',
		'local.vue-components.control-hidden',
		'local.vue-components.control-text',
		'local.vue-components.control-textarea',
		'local.vue-components.control-password',
		'local.vue-components.control-tel',
		'local.vue-components.control-email',
		'local.vue-components.control-hint',
		'local.vue-components.control-select-dropdown',
		'local.vue-components.control-select-radio',
		'local.vue-components.control-datepicker',
		'local.vue-components.control-date-single',
		'local.vue-components.control-date-range',
		'local.vue-components.control-time-single',
		'local.vue-components.control-file',
		'local.vue-components.control-file-upload',
		'local.vue-components.control-checkbox',
		'local.vue-components.control-checkbox-checkbox',
		'local.vue-components.control-checkbox-switch',
		'local.vue-components.control-checkbox-block',
	],
	'skip_core' => true,
];