<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? $this->setFrameMode(false); ?>

<? if (empty($arResult)) return; ?>

<? // вывод подменю
?>
<? if ($arParams['IS_AJAX'] === 'Y') : ?>
	<? $APPLICATION->RestartBuffer(); ?>

	<? // вывод подменю для каталога по ID раздела
	?>
	<? if (is_numeric($arParams['SECTION_ID'])): ?>
		<? foreach ($arResult['ITEMS'] as $element) {
			// пропускаем элементы если не от нужного раздела
			if ($element['ID'] !== $arParams['SECTION_ID']) continue;
			// пропускаем элементы без элементов
			if (empty($element['ELEMENTS'])) continue;

			$products = array();
			// собираем элементы в один массив
			foreach ($element['ELEMENTS'] as $row) {
				array_push($products, $row);
			}
			$products = array_merge(...$products);

			//сортируем элементы в подменю
			usort($products, function ($a, $b) {
				return strcmp($a["TEXT"], $b["TEXT"]);
			});

			// по колонкам
			$columns = 5;
			$maxItem = 15;
			$total = count($products);
			if ($total < $maxItem) $columns = 1; //если меньше 15 элементов, то одна колонка

			$chunkSize = floor($total / $columns);
			$remainder = $total % $columns;

			$result = [];
			$start = 0;

			for ($i = 0; $i < $columns; $i++) {
				// Если остался остаток — добавляем на один элемент больше в текущий подмассив
				$currentSize = $chunkSize + ($i < $remainder ? 1 : 0);
				$result[] = array_slice($products, $start, $currentSize);
				$start += $currentSize;
			}

			// Группировка по первой букве TEXT
			$grouped = array();
			foreach ($result as $i => $blocks) {
				foreach ($blocks as $item) {
					if (!isset($item['TEXT']) || $item['TEXT'] === '') continue;

					$firstLetter = mb_strtoupper(mb_substr($item['TEXT'], 0, 1));
					if ($columns == 1) $firstLetter = $columns; //если только одна колонка

					if (!isset($grouped[$i][$firstLetter])) {
						$grouped[$i][$firstLetter] = [];
					}
					$grouped[$i][$firstLetter][] = $item;
				}
			} ?>

			<div class="slr2-container limiter">
				<div class="slr2-catalog-menu-grid-container">
					<div class="slr2-catalog-menu-grid-item">
						<a href="<?= $element['LINK'] ?>" class="slr2-catalog-menu-button">Весь каталог</a>
					</div>
					<? foreach ($grouped as $next2Column) : ?>
						<? if (!empty($next2Column)) : ?>
							<div class="slr2-catalog-menu-grid-item">
								<? foreach ($next2Column as $next3Column) : ?>
									<? foreach ($next3Column as $next2Element) : ?>
										<? $cls = ($next2Element['SPECIAL_MENU']) ? 'slr2-menu-item--special' : ''; ?>
										<? if ($next2Element['SPECIAL_ICON']): ?>
											<? $src = CFile::GetByID($next2Element['SPECIAL_ICON'])->fetch(); ?>
											<a href="<?= $next2Element["LINK"] ?>" class="<?= $cls ?>">
												<img src="<?= $src['SRC'] ?>" width="24" height="24" alt="">
												<?= $next2Element["TEXT"] ?>
											</a>
										<? else: ?>
											<a href="<?= $next2Element["LINK"] ?>" class="<?= $cls ?>"><?= $next2Element["TEXT"] ?></a>
										<? endif ?>
									<? endforeach; ?>
									<span></span>
								<? endforeach; ?>
							</div>
						<? endif; ?>
					<? endforeach; ?>
				</div>
			</div>

		<? } ?>
	<? endif ?>

	<? //вывод подменю для дополнительных тегов
	?>
	<? if ($arParams['SECTION_ID'] === 'additional'): ?>
		<div class="slr2-container limiter">
			<div class="slr2-catalog-menu-grid-container">
				<? foreach ($arResult['ADDITIONAL']['ADD_MENU'] as $index => $value) : ?>
					<? if (!empty($arResult['ADDITIONAL']['TAGS_LIST'][$index]['ELEMENTS'])) : ?>
						<div class="slr2-catalog-menu-grid-item">
							<? foreach ($arResult['ADDITIONAL']['TAGS_LIST'][$index]['ELEMENTS'] as $tagmenu) : ?>
								<? $name = (isset($tagmenu['ANCHOR']) and strlen($tagmenu["ANCHOR"]) > 2) ? $tagmenu['ANCHOR'] : $tagmenu['NAME']; ?>
								<a href="<?= $tagmenu['URL'] ?>" title="<?= $tagmenu['TITLE'] ?>"><?= $name ?></a>
							<? endforeach ?>
						</div>
					<? endif ?>
				<? endforeach; ?>
			</div>
		</div>
	<? endif ?>

	<? if ($arParams['SECTION_ID'] === 'service'): ?>
		<div class="slr2-container limiter">
			<div class="slr2-catalog-menu-service-container">
				<? $APPLICATION->IncludeComponent(
					"bitrix:main.include",
					".default",
					array(
						"AREA_FILE_SHOW" => "sect",
						"AREA_FILE_SUFFIX" => "menuService",
						"AREA_FILE_RECURSIVE" => "Y",
						"EDIT_TEMPLATE" => ""
					),
					$component
				); ?>
			</div>
		</div>
	<? endif ?>

	<? if ($arParams['SECTION_ID'] === 'sales'): ?>
		<div class="slr2-container limiter">
			<div class="slr2-catalog-menu-grid-container">
				<div class="slr2-catalog-menu-grid-item">
					<a href="/catalog/sale/opravy/" title="">Оправы</a>
					<a href="/catalog/sale/solntsezashchitnye_ochki/" title="">Солнцезащитные очки</a>
				</div>
			</div>
		</div>
	<? endif ?>

	<? die(); ?>
<? endif; ?>

<? //вывод меню верхнего уровня
?>
<div class="slr2-header1__menu">
	<menu class="menu-collapse">
		<? foreach ($arResult["ITEMS"] as $key => $menuItem) {
			if ($menuItem["LINK"] == '/catalog/autlet/') continue;
			if ($menuItem["LINK"] == '/catalog/kontaktnye_linzy/') continue;

			$submenu = (bool)$menuItem['ELEMENTS'] ?? false;
			$cls = ($menuItem['SPECIAL_MENU']) ? ' slr2-menu-item--special' : '';
			if ($submenu) : ?>
				<a href="<?= $menuItem["LINK"] ?>" class="menu-collapse__item slr2-header1__menu-item<?= $cls ?>" data-slr2toggle="catalog-menu" data-slr2url="<?= $templateFolder ?>/submenu.php?id=<?= $menuItem['ID'] ?>" data-slr2type="submenu_<?= $menuItem['ID'] ?>">
					<? if ($menuItem['SPECIAL_ICON']) {
						$src = CFile::GetByID($menuItem['SPECIAL_ICON'])->fetch();
						echo '<img src="' . $src['SRC'] . '" width="24" height="24" alt="">';
					} ?>
					<?= $menuItem['TEXT'] ?>
				</a>
			<? else : 	?>
				<a href="<?= $menuItem["LINK"] ?>" class="menu-collapse__item slr2-header1__menu-item<?= $cls ?>">
					<? if ($menuItem['SPECIAL_ICON']) {
						$src = CFile::GetByID($menuItem['SPECIAL_ICON'])->fetch();
						echo '<img src="' . $src['SRC'] . '" width="24" height="24" alt="">';
					} ?>
					<?= $menuItem['TEXT'] ?>
				</a>
			<? endif; ?>
		<? } ?>

		<a href="/catalog/sale/" class="menu-collapse__item slr2-header1__menu-item slr2-menu-item--special" data-slr2toggle="catalog-menu" data-slr2url="<?= $templateFolder ?>/submenu.php?id=sales" data-slr2type="submenu_sales">Распродажа</a>

		<a href="#" class="menu-collapse__item slr2-header1__menu-item" data-slr2toggle="catalog-menu" data-slr2url="<?= $templateFolder ?>/submenu.php?id=service" data-slr2type="submenu_service">Сервисы</a>

		<? /* if (!empty($arResult['ADDITIONAL']['ADD_MENU'])) : ?>
			<a href="" class="menu-collapse__item slr2-header1__menu-item" data-slr2toggle="catalog-menu" data-slr2url="<?= $templateFolder ?>/submenu.php?id=additional" data-slr2type="submenu_additional">Очки по типам</a>
		<? endif; */ ?>
	</menu>
</div>