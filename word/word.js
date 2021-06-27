function getSearchWord(url){
	var r={};

	$.ajax({
		url: url,
		dataType: 'json',
		async: false,
	}).done(function(data){
		r = data;
	})
	return r;
}

function getAssociativeArray(array,keys){
	if(keys!=null){
		for(var i=0;i<keys.length;i++){
			array=array[keys[i]];
		}
	}
	return array;
}

function searchWord(word,dic_url,keys){
	var url=dic_url+word;
	var r=getSearchWord(url);
	return getAssociativeArray(r,keys)
}

function wordArray(word,mydata){
	var r={};
	for(i=0;i<mydata.length;i++){
		if("url" in mydata[i] && "keys" in mydata[i]){
			//////自作辞典
			site_url=mydata[i]["url"];
			r=Object.assign(r,searchWord(word,site_url,mydata[i]["keys"]));
		}
	}
	
	//////埋め込みの辞典
	site_url='https://script.google.com/macros/s/AKfycbzNaCRvzlIq0DSx7wN99CgBdT38d7mxqpZzGNN-bSnF50exVuWSmDWFFSTdEOF1wTWKRw/exec?text=';
	r=Object.assign(r,searchWord(word,site_url,["data"]));
	return r
}