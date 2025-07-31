<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Купить в 1 клик");

\Bitrix\Main\UI\Extension::load("local.vue-apps.one-click-form");
?>
<div class="limiter">
  <a href="" class="vue-button vue-button--primary vue-button--medium" onclick="oneclickform.show({id: '123'}); return false;">Купить в 1 клик</a>
  <br>
  <a href="" class="vue-button vue-button--primary vue-button--medium" onclick="oneclickform.show({id: '456'}); return false;">Купить в 1 клик</a>
  <br>
  <a href="" class="vue-button vue-button--primary vue-button--medium" onclick="oneclickform.show({id: '789'}); return false;">Купить в 1 клик</a>
  <br>
  <a href="" class="vue-button vue-button--primary vue-button--medium" onclick="oneclickform.show({id: '741'}); return false;">Купить в 1 клик</a>


  <div id="oneClickForm"></div>
  
  <script>
	window.oneclickform = new BX.OneClickForm('#oneClickForm', {
	  data: {
		  sessid: BX.bitrix_sessid(),
		  signedParameters: '',
		  id: 19153,
		  type_id: 89
	  },
	  actions: {
		getForm: ['twinpx:disciplinar.comments', 'getForm'],
		sendForm: ['twinpx:disciplinar.comments', 'sendForm'],
		getProduct: ['twinpx:disciplinar.comments', 'getProduct'],
	  },
	  lang: {
		  buttonSuccess: 'Вернуться в магазин',
		  buttonError: 'Повторить попытку'
	  }
	});
	oneclickform.run()
  </script>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>