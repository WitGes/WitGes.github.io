function empty(){
	$('#newElementTab').val('');
}

function start(){
	
	var countTab= tab.length<10 ? tab.length : 10;
	var str='<li class="enabled">\
				<a class="buttonPrevious" aria-label="Previous" style="cursor:pointer">\
					<span aria-hidden="true">&laquo;</span>\
				</a>\
			</li>';
	
	for (var i=0;i<countTab;i++){
		str+='<li><a class="button" style="cursor:pointer" value="'+i+'">'+tab[i]+'</a></li>'
	};
	str+='<li class="enabled">\
			<a class="buttonNext" aria-label="Next" style="cursor:pointer" >\
				<span aria-hidden="true">&raquo;</span>\
			</a>\
		</li>';
	
	$('ul').html(str);
	
	maxMinFromTab();
	
};