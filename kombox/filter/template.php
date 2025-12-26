<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
if (method_exists($this, 'setFrameMode'))
	$this->setFrameMode(true);

if (count($arResult['ELEMENTS']) > 1 && $arResult["ITEMS_COUNT_SHOW"]) :
	$arParams['MESSAGE_ALIGN'] = isset($arParams['MESSAGE_ALIGN']) ? $arParams['MESSAGE_ALIGN'] : 'LEFT';
	$arParams['MESSAGE_TIME'] = intval($arParams['MESSAGE_TIME']) >= 0 ? intval($arParams['MESSAGE_TIME']) : 5;

	include($_SERVER["DOCUMENT_ROOT"] . $templateFolder . "/functions.php");
	include($_SERVER["DOCUMENT_ROOT"] . $templateFolder . "/choice.php");

	CJSCore::Init(array("ajax", "popup"));

	$APPLICATION->AddHeadScript("/bitrix/js/kombox/filter/jquery.filter.js");
	$APPLICATION->AddHeadScript("/bitrix/js/kombox/filter/ion.rangeSlider.js");
	$APPLICATION->AddHeadScript("/bitrix/js/kombox/filter/jquery.cookie.js");

	$ajax = $_POST['filter_ajax'] == 'y';
	if ($ajax) $APPLICATION->RestartBuffer();
?>
	<div class="kombox-filter" id="kombox-filter">
		<form name="<? echo $arResult["FILTER_NAME"] . "_form" ?>" action="<? echo $arResult["FORM_ACTION"] ?>" method="get" <? if ($arResult['IS_SEF']) : ?> data-sef="yes" <? endif; ?>>
			<? foreach ($arResult["HIDDEN"] as $arItem) : ?>
				<input type="hidden" name="<? echo $arItem["CONTROL_NAME"] ?>" id="<? echo $arItem["CONTROL_ID"] ?>" value="<? echo $arItem["HTML_VALUE"] ?>" />
			<? endforeach; ?>
			<ul>
				<? if (!empty($arResult["ITEMS"]['Розничные базовые'])): ?>
					<li class="lvl1 lvl1-custom-price">
						<div class="kombox-filter-property-head">
							<i class="kombox-filter-property-i"></i>
							<span class="kombox-filter-property-name">Цена</span>
						</div>
						<?
						// вывод цены
						komboxShowField($arResult["ITEMS"]['Розничные базовые']); //вывод цены
						?>
					</li>
				<? endif ?>

				<?
				//Назначение / Пол
				if (!strstr($APPLICATION->GetCurPage(), '/catalog/aksessuary/')) {
					komboxCustomFilterFolder($arResult["ITEMS"], "Назначение / Пол", "naznachenie");
				}

				foreach ($arResult["ITEMS"] as $arItem) :
					if (empty($arItem["VALUES"])) continue; //если нет элементов не выводим

					//переименование название
					if ($arItem["CODE_ALT"] == 'sph') {
						$arItem["NAME"] = 'Диоптрии';
					}

					if ($arItem["HINT"] === "CLOSED" || isMobile()) {
						$closed = true;
					}
					$showProperty = false;
					if ($arItem["SETTINGS"]["VIEW"] == "SLIDER") {
						if (isset($arItem["VALUES"]["MIN"]["VALUE"]) && isset($arItem["VALUES"]["MAX"]["VALUE"]) && $arItem["VALUES"]["MAX"]["VALUE"] > $arItem["VALUES"]["MIN"]["VALUE"])
							$showProperty = true;
					} elseif (!empty($arItem["VALUES"]) && !isset($arItem["PRICE"])) {
						$showProperty = true;
					}

					/////Artem
					$item_name = explode("―", $arItem['NAME']);
					if (current($item_name) !== "") {
						if ($showProperty) {
							if ($arItem["CODE"] !== "CML2_TRAITS" and $arItem["CODE"] !== "CML2_AVAILABLE") { ?>
								<li class="lvl1<? if ($closed) : ?> kombox-closed<? endif; ?>" data-id="<? echo $arItem["CODE_ALT"] . '-' . $arItem["ID"] ?>">
									<div class="kombox-filter-property-head">
										<i class="kombox-filter-property-i"></i>
										<span class="kombox-filter-property-name"><? echo $arItem["NAME"] ?></span>
										<? if (strlen($arItem['HINT11111'])) : ?>
											<span class="kombox-filter-property-hint"></span>
											<div class="kombox-filter-property-hint-text"><? echo $arItem['HINT'] ?></div>
										<? endif; ?>
									</div>
									<span class="for_modef"></span>
									<?
									//twinpx
									if ($arItem['CODE_ALT'] == 'att_brand') {
										echo '<!--noindex-->';
										komboxShowField($arItem);
										echo '<!--/noindex-->';
									} else {
										komboxShowField($arItem);
									}
									?>
								</li>
					<?
							}
						}
					}
					?>
				<? endforeach; ?>

				<?
				$customFilters = [
					//"naznachenie" => "Назначение",
					"cvet_linz" => "Цвет линз",
					"cvet_opravy" => "Цвет оправы",
					"tehnologiya_optiki" => "Технология оптики",
					"material_opravy" => "Материал оправы"
				];
				foreach ($customFilters as $filter => $param) {
					if (strstr($APPLICATION->GetCurPage(), '/catalog/aksessuary/')) {
						if (in_array($filter, array("cvet_linz", "tehnologiya_optiki"))) {
							continue;
						}

						if (in_array($filter, array("cvet_opravy"))) {
							$param = "Цвет";
						}

						if (in_array($filter, array("material_opravy"))) {
							$param = "Материал";
						}
					}

					if ($filter === 'cvet_linz') {
						if ($arResult['FILTER_URL'] !== '/catalog/opravy/') {
							komboxCustomFilterFolder($arResult["ITEMS"], $param, $filter, 'close');
						}
					} else {
						komboxCustomFilterFolder($arResult["ITEMS"], $param, $filter, 'close');
					}
				}
				?>
			</ul>
			<input type="submit" id="set_filter" value="<?= GetMessage("KOMBOX_CMP_FILTER_SET_FILTER") ?>" />
			<a href="<?= $arResult["DELETE_URL"] ?>" class="kombox-del-filter<? if (!$arResult["SET_FILTER"]) : ?> disabled<? endif; ?>"><?= GetMessage("KOMBOX_CMP_FILTER_DEL_FILTER") ?></a>
			<div class="modef" id="modef" style="display:none">
				<div class="modef-wrap">
					<? echo GetMessage("KOMBOX_CMP_FILTER_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">' . intval($arResult["ELEMENT_COUNT"]) . '</span>')); ?>
					<a href="<? echo $arResult["FILTER_URL"] ?>"><? echo GetMessage("KOMBOX_CMP_FILTER_FILTER_SHOW") ?></a>
					<span class="ecke"></span>
				</div>
			</div>
		</form>
		<div class="kombox-loading"></div>
	</div>
	<div id="mouse_loading_icon" style="display:none;"><img src="<?= $this->GetFolder() ?>/images/loader.svg" alt="mouse_loading_icon" /></div>
	<? if ($ajax) die(); ?>
	<script>
		$(function() {
			komboxFilterJsInit();
			$('#kombox-filter').komboxAjaxSmartFilter({
				ajaxURL: '<? echo CUtil::JSEscape($arResult["FORM_ACTION"]) ?>',
				urlDelete: '<? echo CUtil::JSEscape($arResult["DELETE_URL"]) ?>',
				align: '<? echo $arParams['MESSAGE_ALIGN'] ?>',
				modeftimeout: <? echo $arParams['MESSAGE_TIME'] ?>
			});
		});
	</script>
	<script>
		BX.ready(function() {
			BX.addCustomEvent("onKomboxFilterCatalogLoading", BX.delegate(function(data) {
				var $data = $('<div>' + data + '</div>');
				var content = $data.find('#catalogSection div.productList');
				var cur_content = $('#catalogSection div.productList');
				cur_content.replaceWith(content);

				//учтем постраничку
				var pager = $('div.bx-pagination', $data);
				var cur_pager = $('div.bx-pagination');

				var get_params = window.location.search.substr(1);

				if (pager.length) {
					var links = pager.find('a');
					if (get_params !== '') {
						links.each(function() {
							var href = $(this).attr('href');
							$(this).attr('href', href + '&' + get_params);
						});
					}
					if (cur_pager.length) {
						cur_pager.replaceWith(pager).show();
					} else {
						content.after(pager);
					}
				} else if (cur_pager.length) {
					cur_pager.hide();
				}

				//выполним скрипты
				var ob = BX.processHTML(data);
				BX.ajax.processScripts(ob.SCRIPT);
			}, this));
		});
	</script>
<? endif; ?>