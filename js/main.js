$(document).ready(function(){
	start();
});

$('button').on('click', function(){
	if (parseInt($('#newElementTab').val())) {
		tab.push(parseInt($('#newElementTab').val()));
		start();
		empty();
	}
	else{
		$('#newElementTab').attr('placeholder','Musisz podać liczbę');
	};
});
$('#newElementTab').keydown(function (event){
	
	if ( event.which == 13 ) {
		if (parseInt($('#newElementTab').val())) {
			tab.push(parseInt($('#newElementTab').val()));
			start();
			empty();
		}
		else{
			$('#newElementTab').attr('placeholder','Musisz podać liczbę');
		}
	}
});

$('ul').on('dblclick','.button',function(event){
		if (tab.length>2) tab.splice($(this).attr('value'),1);
		start();
});

$('ul').on('click','.buttonNext',function(){
	var tmp = tab[0];
	tab.shift(tab.push(tmp));
	start();
});

$('ul').on('click','.buttonPrevious',function(){
	var tmp = tab[tab.length-1];
	tab.unshift(tmp);
	tab.splice(tab.length-1,1)
	start();
});