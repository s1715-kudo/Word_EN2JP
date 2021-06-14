var mydata=JSON.parse(setKeyinit("dic","{}"));
var imgflag=setKeyinit("img","true")=="true";
var speakflag=setKeyinit("speak","true")=="true";

var word=setKeyinit("word","");

if(word!=""){
	var r=wordArray(word,mydata);

	var display_data="<h1>"+word+"</h1>"
	for(var d in r){
		display_data+="<div class='result_div' id='result_"+d+"'><h2>"+d+"</h2><p class='description'>"+r[d]+"</p></div>";
	}
	
	
	if(imgflag || speakflag){
		display_data+="<div class='result_div' id='img_link'><h2>Get informed about \""+word+"\"</h2>"
	}
	if(imgflag){
		display_data+="<p class='description'><a href='https://images.search.yahoo.com/search/images;?p="+word+"' target='_blank'>Search Image by yahoo!</a></p>"
		display_data+="<p class='description'><a href='https://www.google.co.jp/search?tbm=isch&q="+word+"' target='_blank'>Search Image by Google</a></p>";
	}
	if(speakflag){
		display_data+="<p class='description'><button onclick='speak();'>Check the pronunciation</button></p>";
	}
	if(imgflag || speakflag){
		display_data+="</div>"
	}
	
	
	document.getElementById("result_data").innerHTML=display_data;
}

function speak(){
	var u=new SpeechSynthesisUtterance();
	u.lang='en-US';
	u.text=word;
	speechSynthesis.speak(u)
}