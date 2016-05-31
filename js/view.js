
$(document).ready(function(){

	var countTab=tab.length;
	var str='<li class="disabled">\
				<a href="#" aria-label="Previous">\
					<span aria-hidden="true">&laquo;</span>\
				</a>\
			</li>';
	
	for (var i=0;i<countTab;i++){
		str+='<li><a href="#">'+tab[i]+'</a></li>'
	};
	str+='<li class="disabled">\
			<a href="#" aria-label="Next">\
				<span aria-hidden="true">&raquo;</span>\
			</a>\
		</li>';
	
	$('ul').html(str);
	
});
//exports.tab=tab;
//exports.view=view;