var mydata=JSON.parse(setKeyinit("dic","{}"));

var word=setKeyinit("word","");

if(word!=""){
	var r=wordArray(word,mydata);

	var display_data="<h1>"+word+"</h1>"
	for(var d in r){
		display_data+="<h2>"+d+"</h2><p>"+r[d]+"</p>";
	}
	document.getElementById("result_data").innerHTML=display_data;
}