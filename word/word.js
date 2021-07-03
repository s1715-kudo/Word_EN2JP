var cookie_word_json=get_json('word_json',{});
cookie_word_json=JSON.parse(JSON.stringify(cookie_word_json))


global.zcookies = {
	get: function(k) {
		return msgpack.unpack(pako.inflateRaw(atob(Cookies.get(k))));
	},
	set: function(k, v, options) {
		var x = Cookies.get(k);
		var cookieSizeBeforeSave = document.cookie.length;
		var y = btoa(String.fromCharCode.apply(null, pako.deflateRaw(msgpack.pack(v), {level: 9})));
		Cookies.set(k, y, options);
		if (x !== y && cookieSizeBeforeSave === document.cookie.length) {
			throw new Error('zcookies: QUOTA Error!');
		}
	}
};

function get_word_json(){
	var r={}
	
}

function set_word_json(){
	var r={};
	
	return r
}


function get_json(key,init){
	var r=zcookies.get(key)
	if (r===undefined||r==null)r=init
	return r;
}


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
	
	if(word in cookie_word_json){//cookieにある場合
		r=cookie_word_json[word]
	}
	else{//cookieにない場合
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
		
		cookie_word_json[word]=r
		
		console.log(cookie_word_json)
		zcookies.set('word_json',cookie_word_json,{expires:60*60*24*7});
	}
	
	return r;
}