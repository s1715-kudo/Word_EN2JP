var mydata=JSON.parse(setKeyinit("dic","[{}]"));

var cookie_word_json=Cookies.get('word_json');
if (cookie_word_json===undefined||cookie_word_json==null)cookie_word_json="{}"
cookie_word_json=JSON.parse(cookie_word_json)

function registration(word){
	var r=wordArray(word,mydata);
}

function btnclick(){
	var word=document.getElementById("input_word").value;
	registration(word)
}

$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
