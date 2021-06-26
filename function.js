function getParam(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setKeyinit(key,value){
	var url_key=getParam(key);
	if(url_key==null)url_key=value;
	else if((typeof value)=="number")url_key=Number(url_key);
	return url_key;
}

function addDisplayJSONText(name,json,n){
	var text=""
	for(i in json){
		////i
		////json[i]
		
		text+="<div class='json_block' id='json_"+name+"_"+i+"'>"
		text+="<p class='json_keyname json_nest_"+n+"'>"+i+"</p>"
		if(typeof(json[i])!="object"){
			text+="<p class='json_body'>"+json[i]+"</p>"
		}
		else{
			text+=addDisplayJSONText(name,json[i],n+1)
		}
		
		text+="</div>"
	}
	return text;
}

function displayJSONText(htmlId,name,json){
	document.getElementById(htmlId).innerHTML=addDisplayJSONText(name,json,0)
}