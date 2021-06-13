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




var mydata=JSON.parse(setKeyinit("dic","{}"));

function btnclick(){
	var word=document.getElementById("input_word").value;
	
	var r=wordArray(word,mydata);
	
	var display_data=""
	for(var d in r){
		display_data+="<p>"+d+"："+r[d]+"</p>";
	}
	document.getElementById("result_data").innerHTML=display_data;
}



$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
