<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Тэги");
?>// ----- //
<?$APPLICATION->IncludeComponent(
	"twinpx:tags.list", 
	".default", 
	array(
		"IBLOCK_ID" => "4",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"COMPONENT_TEMPLATE" => ".default",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "360000",
		"BLOCK_HEAD" => "Популярные модели",
		"BUTTON_TEXT" => "Показать еще",
		"ACTIVE" => "N"
	),
	false
);?>
// ----- //<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>