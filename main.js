var mydata=setKeyinit("dic","{}");

function btnclick(){
	var word=document.getElementById("input_word").value;
	var wordurl="word/word.html?dic="+mydata+"&word="+word;
	var str="<iframe width='100%' height='500' src='"+wordurl+"'></iframe>"
	document.getElementById("result_data").innerHTML=str;
}

$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
