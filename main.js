var mydata=setKeyinit("dic","{}");

function btnclick(){
	var word=document.getElementById("input_word").value;
	window.location.href="word.html?dic="+mydata+"&word="+word; 
}

$("#input_word").keydown(function(event) {
	if (event.key === "Enter"){
		btnclick();
	}
});
