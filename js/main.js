$(document).ready(function(){
	start();
	document.ondblclick = function () {
    if (window.getSelection)
        window.getSelection().removeAllRanges();
    else if (document.selection)
        document.selection.empty();
	}
});

function plusNumber () {
	if (parseInt($('#newElementTab').val())) {
		tab.push(parseInt($('#newElementTab').val()));
		start();
		empty();
	}
	else{
		$('#newElementTab').attr('placeholder','Musisz podać liczbę');
	};
};

$('button').on('click', function(){
	plusNumber()
});

$('#newElementTab').keydown(function (event){
	if (event.which == 13)
		plusNumber();
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