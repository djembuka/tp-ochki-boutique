<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

/** @var array $arParams */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var array $arResult */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
?>
<? \Bitrix\Main\UI\Extension::load("local.twinpx.control-tel"); ?>

<? if ($arParams['IS_AJAX'] === 'Y'): ?>
	<? $APPLICATION->RestartBuffer(); ?>
	<div class="slr2-phone-wrapper">
		<div class="slr2-phone-popup">
			<img src="<?= $templateFolder ?>/images/clear-icon.svg" alt="" class="slr2-phone-clear">
			<img src="<?= $templateFolder ?>/images/image.png" alt="" class="slr2-phone-img">
			<div class="slr2-phone-text">
				<div class="slr2-phone-close"></div>
				<img src="<?= $templateFolder ?>/images/full-logo.svg" alt="" class="slr2-phone-logo">
				<div class="slr2-phone-tel-main">+7 (985) 928-60-55</div>
				<div class="slr2-phone-store-name">Интернет-магазин</div>
				<div class="slr2-phone-tel">+7 (964) 773-00-14</div>
				<div class="slr2-phone-store-name">Бутик</div>
				<div class="slr2-phone-form-container">
					<form action="/local/templates/dresscodeV2/components/bitrix/form.result.new/modal/ajax.php?FORM_ID=2" method="POST" class="slr2-phone-form" name="SIMPLE_FORM_2">
						<div class="slr2-phone-form__title">Заказать звонок</div>
						<div class="slr2-phone-form__content">
							<?= bitrix_sessid_post() ?>
							<input type="hidden" name="WEB_FORM_ID" value="2" />
							<input type="hidden" name="web_form_apply" value="Y" />

							<div class="slr2-phone-form__control">
								<img src="<?= $templateFolder ?>/images/clear-icon.svg" alt="" class="slr2-phone-form__clear">
								<label for="slr2TelInput" class="slr2-phone-form__label">Ваш номер телефона</label>
								<input id="slr2TelInput" type="text" name="form_text_6" value="" class="slr2-phone-form__input twpx-control-tel">
							</div>

							<button type="submit" class="slr2-phone-form__button">Заказать</button>
						</div>
						<div class="slr2-phone-consent">
							Нажимая кнопку, вы соглашаетесь с <a href="">политикой конфиденциальности</a> и даете <a href="">согласие на обработку персональных данных</a>.
						</div>
					</form>
					<div class="slr2-phone-form__message-container">
						<div class="slr2-phone-form__message"></div>
						<div class="slr2-phone-form__message-button">Повторить</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<? return ?>
<? endif ?>

<div class="slr2-header1__phone-icon" data-slr2toggle="phone" data-slr2url="<?= $templateFolder ?>/ajax.php">
	<img src="<?= SITE_TEMPLATE_PATH ?>/headers/headerc/images/dark-theme/phone-icon.svg" alt="Телефон" />
</div>