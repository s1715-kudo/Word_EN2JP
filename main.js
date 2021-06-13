var mydata=setKeyinit("dic","{}");

function btnclick(){
	var word=document.getElementById("input_word").value;
	var wordurl="word.html?dic="+mydata+"&word="+word; 
	window.open(wordurl,'_blank');
}

$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
