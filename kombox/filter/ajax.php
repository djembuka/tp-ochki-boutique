<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<?
$this->IncludeLangFile('template.php');

if ($_POST['filter_ajax'] == 'y') {
	include($_SERVER["DOCUMENT_ROOT"] . $templateFolder . "/choice.php");

	echo '<!--START KOMBOX_SMART_FILTER-->';
	echo CUtil::PHPToJSObject($arResult);
	echo '<!--END KOMBOX_SMART_FILTER-->';
} else {
	$APPLICATION->RestartBuffer();
	echo CUtil::PHPToJSObject($arResult);
}
?>