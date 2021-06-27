var mydata=setKeyinit("dic","{}");

function btnclick(){
	var word=document.getElementById("input_word").value;
	var wordurl="word/word.html?dic="+mydata+"&word="+word;
	window.open(wordurl, null, 'width=500');
}

$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
