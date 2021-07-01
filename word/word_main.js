var mydata=JSON.parse(setKeyinit("dic","{}"));
var imgflag=setKeyinit("img","true")=="true";
var speakflag=setKeyinit("speak","true")=="true";
var searchflag=setKeyinit("searchflag","true")=="true";
var searchgl=setKeyinit("searchgl","uk");

var word=setKeyinit("word","");

if(word!=""){
	var r=wordArray(word,mydata);

	var display_data="<h1>"+word+"</h1>"
	display_data+=addDisplayJSONText(word,r,0)
	
	if(imgflag || speakflag || searchflag){
		display_data+="<div class='json_block' id='word_info'><p class='json_keyname json_nest_0'>Get informed about \""+word+"\"</p>"
	}
	if(searchflag){
		display_data+="<p class='json_body'><a href='https://google.com/search?q="+word+"&hl=en&gl="+searchgl+"' target='_blank'>Search by Google</a></p>"
	}
	if(imgflag){
		display_data+="<p class='json_body'><a href='https://www.google.co.jp/search?tbm=isch&q="+word+"&hl=en&gl="+searchgl+"' target='_blank'>Search Image by Google</a></p>";
		display_data+="<p class='json_body'><a href='https://images.search.yahoo.com/search/images;?p="+word+"' target='_blank'>Search Image by yahoo!</a></p>"
	}
	if(speakflag){
		display_data+="<p class='json_body'><button onclick='speak();'>Check the pronunciation</button></p>";
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
