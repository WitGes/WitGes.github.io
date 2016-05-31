var maxMinFromTab=function(){
	
	var max=0, min=Number.MAX_VALUE, elementsTab, tmp;
	var evenEl= tab.length%2==0 ? true : false;
	
	evenEl ? elementsTab=tab.length : elementsTab=tab.length-1;
	evenEl ? tmp=null : tmp=tab[tab.length-1];

	for (var i=0;i<elementsTab;i+=2){
		if (tab[i]>tab[i+1]){
			if (tab[i]>max) max=tab[i];
			if (tab[i+1]<min) min=tab[i+1];
		}
		else{
			if (tab[i]<min) min=tab[i];
			if (tab[i+1]>max) max=tab[i+1];
		};
	};
	if (!evenEl && max<tmp) max=tmp;
	else if (!evenEl && min>tmp) min=tmp;
	$('.resolveMax').html('<h2>max='+max+'</h2>');
	$('.tabLength').html('<h2>Ile liczb='+tab.length+'</h2>');
	$('.resolveMin').html('<h2>min='+min+'</h2>');
};