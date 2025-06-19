<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Header 1");

Bitrix\Main\UI\Extension::load("local.twinpx.control-tel");
?>

<input type="tel" name="TEL" value="" class="twpx-control-tel" />
    
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
