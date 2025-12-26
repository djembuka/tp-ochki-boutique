$(function(){
	$.komboxInherit(
		'komboxAjaxSmartFilter', 
		$.komboxSmartFilter, 
		{
			options: { 
				ajax_enable: 'Y'
			},
			
			init: function(wrapper, options){
				if (window.location.hash != '') {
					if(!(window.history && history.pushState))
					{
						var uri = window.location.hash.replace('#', '');
						window.location.href = document.location.pathname + uri;
					}
				}

				$.KomboxSmartFilter.prototype.init.call(this, wrapper, options);
				
				var bSef = this.form.data('sef') == 'yes';
				
				if(bSef)
					window.komboxSefUrl = this.getSefUrl();
				else
					window.komboxSefUrl = '';
					
				this.isAjax = true;
				var _this = this;
					
				if(this.isAjax)
				{
					$('a.showchild', this.form).on('click', function(){
						_this.form.data('clicked', 'set_filter');
						_this.submitForm();
						return false;
					});
					
					this.form.on('click', 'a.kombox-del-filter', function() {
						_this.form.data('clicked', 'del_filter');
						_this.submitForm();
						return false;
					});
					
					this.form.on('click', '.kombox-link .lvl2 a', function() {
						var $this = $(this);
						var lvl2 = $this.closest('.lvl2');
						
						if(lvl2.hasClass('kombox-disabled') && !lvl2.hasClass('kombox-checked'))
							return false;
							
						if($this.data('checked') == 'checked'){
							$this.data('checked', '');
							lvl2.removeClass('kombox-checked');
						}
						else{
							$this.data('checked', 'checked');
							lvl2.addClass('kombox-checked');
						}
							
						_this.form.data('clicked', 'set_filter');
						_this.form.find('#set_filter').removeClass('disabled');
						_this.submitForm();
						return false;
					});
					
					$(document).on('mousemove',function(e){
						$('#mouse_loading_icon').css({"top":(e.pageY+20),"left":(e.pageX+15)});
					});
				}
			},
			
			ShowHideModueLoadingIcon: function(){
				if($('#mouse_loading_icon').css('display')=="block")
				{
					$('#mouse_loading_icon').css('display','none');
				} else {
					$('#mouse_loading_icon').css('display','block');
				}
			},
			
			reload: function(input){
				this.input = input;
				
				if(this.form.length)
				{
					var values = new Array;
					
					this.gatherInputsValues(values, this.form.find('input, select, .kombox-link .lvl2 a'));
					
					if(this.options.ajax_enable == "N") 
					{
						BX.ajax.loadJSON(
							this.options.ajaxURL,
							this.values2post(values),
							BX.delegate(this.postHandler, this)
						);
					}
					else
					{
						this.catalogLoading(values);
					}
				}
			},
			
			submitForm: function(){
				var form = this.form;
				
				if(form.data('clicked') == 'set_filter')
				{
					if(form.find('#set_filter').hasClass('disabled'))
						return false;
				}
				
				if(this.isAjax)
				{
					var values = new Array;
						
					if(form.data('clicked') == 'del_filter')
					{
						form.find('input[type=text]').val('');
						
						var checkboxes = form.find('input[type=checkbox], input[type=radio]');
						checkboxes.prop('checked', false);
						checkboxes.closest('span.checked').removeClass('checked');
						
						form.find('select').each(function(){
							var select = $(this);
							select.find('option').prop('selected', false).removeAttr('selected');
							select.find('option:first').prop('selected', true).attr('selected', 'selected');
							select.val('');
						});
						
						form.find('.kombox-link .lvl2 a').each(function(){
							var link = $(this);
							var lvl2 = link.closest('.lvl2');
							lvl2.removeClass('kombox-checked');
							link.data('checked', '');
						});
						
						form.find('.kombox-range div').ionRangeSlider("reset");
					}
					
					if(this.form.length)
					{
						this.gatherInputsValues(values, this.form.find('input, select, .kombox-link .lvl2 a'));
						this.catalogLoading(values);
					}
					return false;
				}
				else
				{
					return $.KomboxSmartFilter.prototype.submitForm.call(this);
				}
			},
			
			catalogLoading: function(values) {
				var _this = this;
				_this.ShowHideModueLoadingIcon();
				var params = {
					'filter_ajax':'y'				
				}
				_this.updateUrl(params, values);
				
				//window.location.href = window.location.pathname;
				//return;
				
				$.post(_this.options.ajaxURL, params, function(data) {
					var regFilter = /<\!--START KOMBOX_SMART_FILTER-->([\s\S]*?)<\!--END KOMBOX_SMART_FILTER-->/gim;
					var strFilter = regFilter.exec(data);
					if(strFilter != null)
					{
						var jsonFilter = BX.parseJSON(strFilter[1]);
						_this.postHandler(jsonFilter);
					}
					
					BX.onCustomEvent(_this, 'onKomboxFilterCatalogLoading', [data]);
					
					_this.initChoice();
					
					_this.ShowHideModueLoadingIcon();
				})
			},
		
			postHandler: function(result){
				var form = this.form;
				
				if(result.SET_FILTER || this.change)
				{
					form.find('.kombox-del-filter').removeClass('disabled');
				}
				else if(!this.change)
				{
					form.find('.kombox-del-filter').addClass('disabled');
				}
				
				$.KomboxSmartFilter.prototype.postHandler.call(this, result);
			},
			
			showModef: function(result){
			}
		}
	);
});


BX.ready(function(){
	BX.addCustomEvent("onKomboxFilterCatalogLoading", BX.delegate(function(data){
		var $data = $('<div>' + data + '</div>');
		var h1 = $data.find('h1');
		var title = $data.find('title');
		var keywords = $data.find('meta[name=keywords]');
		var description = $data.find('meta[name=description]');
		var descriptionSeo = $data.find('#category-description-seo');
		var descriptionLink = $data.find('#seo-link-block');
		var cur_h1 = $('h1');
		var cur_title = $('title');
		var cur_keywords= $('meta[name=keywords]');
		var cur_description= $('meta[name=description]');
		var cur_descriptionSeo= $('#category-description-seo');
		var cur_descriptionLink= $('#seo-link-block');
		
		cur_h1.replaceWith(h1);
		cur_title.replaceWith(title);
		cur_keywords.replaceWith(keywords);
		cur_description.replaceWith(description);
		cur_descriptionSeo.replaceWith(descriptionSeo);
		cur_descriptionLink.replaceWith(descriptionLink);
		
	}, this));
});
