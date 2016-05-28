var tab=[21, 23, 111, 43, 55, 11, 7, 6, 3, 87, 34, 65, 98];

var minMax=function(){
	var min=[], max=[];
	var k=0, max, maxTmp, min, minTmp, elementsTab, tmp;
	var evenEl= tab.length%2==0 ? true : false;
	evenEl ? elementsTab=tab.length : elementsTab=tab.length-1;
	evenEl ? tmp=NULL : tmp=tab[tab.length-1];
	for (var i=0;i<elementsTab;i+=2){
		if (tab[i]>tab[i+1]){
			max[k]=tab[i];
			min[k]=tab[i+1];
			}
		else{
			min[k]=tab[i];
			max[k]=tab[i+1]
			};
		k++;
	};
	maxTmp=max[0];
	for (var i=1;i<max.length;i++){
		if (max[i]>maxTmp) maxTmp=max[i];
	}
	if (!evenEl && maxTmp<tmp) maxTmp=tmp;
	return maxTmp;
}


$(document).ready(function(){
	var phrase='[';
	$(tab).each(function(index){
		index<tab.length-1 ? phrase+=tab[index]+", " : phrase+=tab[index]+']';
	});
	$('.resolve').html(phrase+' max='+minMax());
});