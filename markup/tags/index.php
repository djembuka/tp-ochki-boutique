<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Tags");
?><style>
#tagsList .heading {
    margin-bottom: 0px !important;
    text-transform: uppercase;
    font-family: 'robotobold';
    padding-bottom: 48px;
    text-align: center;
    padding-left: 18px;
    padding-top: 48px;
    font-size: 18px;
    display: block;
    color: #000000;
}
#tagsList a {
    text-decoration: none;
}
	.more-button {
		margin: 30px auto 0;
		border-radius: 4px;
		background-color: #f2f2f2;
		text-align: center;
		width: 200px;
		line-height: 37px;
		cursor: pointer;
	}
	#tagsList .row-link {
		max-height: 80px;
		overflow: hidden;
	}
@media screen and (max-width: 991px) {
	#tagsList .seo-link-block .row-link {
		flex-wrap: wrap;
	}
}
	#tagsList.tags-list--show .row-link {
		height: auto;
		max-height:inherit;
	}
	#tagsList .more-button span:first-child {
		display: inline;
	}
	#tagsList .more-button span:last-child {
		display: none;
	}
	#tagsList.tags-list--show .more-button span:first-child {
		display: none;
	}
	#tagsList.tags-list--show .more-button span:last-child {
		display: inline;
	}
	/*effect*/
	#tagsList .row-link a,
	#tagsList.tags-list--show .row-link a {
		opacity: 0;
	}
	#tagsList.tags-list--effect .row-link a {
		transition: opacity .5s ease;
		-webkit-transition: opacity .5s ease;
	}
	#tagsList.tags-list--effect .row-link a {
		opacity: 1;
		transition-delay: .3s;
	}
	#tagsList.tags-list--effect .row-link a:nth-child(7n) {
		transition-delay: .25s;
	}
	#tagsList.tags-list--effect .row-link a:nth-child(5n) {
		transition-delay: .2s;
	}
	#tagsList.tags-list--effect .row-link a:nth-child(3n) {
		transition-delay: .15s;
	}
	#tagsList.tags-list--effect .row-link a:nth-child(2n) {
		transition-delay: .1s;
	}
</style>

<script>
	(function($) {
		$( function() {
			$( '#tagsList' ).addClass('tags-list--effect');
			$( '#tagsList .more-button' ).click( function(e) {
				e.preventDefault();

				$( '#tagsList' ).toggleClass('tags-list--show');
				$( '#tagsList' ).removeClass('tags-list--effect');
				setTimeout( function() {
					$( '#tagsList' ).addClass('tags-list--effect');
				},100);
			});
		});
	})(jQuery)
</script>

<div id="tagsList">
<div class="limiter">
  <a href="/brands/"><span class="heading">Очки по тегам</span></a>

<div class="seo-link-block">
  <div class="row-link">
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-wayfarer/">Ray Ban Wayfarer</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/muzhskie-da/">Мужские</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/zhenskie-da/">Женские</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-aviator/">Ray Ban Aviator</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-clubmaster/">Ray Ban Clubmaster</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-round/">Ray Ban Round</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-erika/">Ray Ban Erika</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-junior/">Ray Ban Junior</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/detskie-da/">Детские</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/forma_opravy-kruglaya-or-kruglaya_koshachiy_glaz/">Круглые</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-ferrari/">Ray Ban Ferrari</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/skladnye-da/">Складные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-highstreet/">Ray Ban Highstreet</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-icons/">Ray Ban Icons</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-active_lifestyle/">Ray Ban Active Lifestyle</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/krasnyy-da/">Красные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/chernyy-da/">Черные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/korichnevyy-da/">Коричневые</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/forma_opravy-kvadratnaya/">Квадратные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/fotrokhromnye-da/">Фотохромные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/gradient-da/">Градиент</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/polyarizatsiya-da/">С поляризацией</a>
<a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-wayfarer/">Ray Ban Wayfarer</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/muzhskie-da/">Мужские</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/zhenskie-da/">Женские</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-aviator/">Ray Ban Aviator</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-clubmaster/">Ray Ban Clubmaster</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-round/">Ray Ban Round</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-erika/">Ray Ban Erika</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-junior/">Ray Ban Junior</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/detskie-da/">Детские</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/forma_opravy-kruglaya-or-kruglaya_koshachiy_glaz/">Круглые</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-ferrari/">Ray Ban Ferrari</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/skladnye-da/">Складные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-highstreet/">Ray Ban Highstreet</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-icons/">Ray Ban Icons</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/kollektsiya-active_lifestyle/">Ray Ban Active Lifestyle</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/krasnyy-da/">Красные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/chernyy-da/">Черные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/korichnevyy-da/">Коричневые</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/forma_opravy-kvadratnaya/">Квадратные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/fotrokhromnye-da/">Фотохромные</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/gradient-da/">Градиент</a>
    <a href="/catalog/solntsezashchitnye_ochki/ray_ban/filter/polyarizatsiya-da/">С поляризацией</a>
  </div>
	<div class="more-button">
		<span>Показать еще</span>
		<span>Скрыть теги</span>
	</div>
</div>

</div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>