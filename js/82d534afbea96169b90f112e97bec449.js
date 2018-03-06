var banner_current=!1;var win;$(document).on('click','.js_bs_counter, .bs_counter',function(){banner_current=$(this);$("input[name='banner_id']",'.js_bs_form, .bs_form').val(banner_current.attr('rel'));$('.js_bs_form, .bs_form').submit();if(!banner_current.attr('target')=='_blank')
{return!1}});diafan_ajax.success.bs_click=function(form,response){if(banner_current.attr('target')!='_blank')
{window.location=banner_current.attr('href')}
return!1}