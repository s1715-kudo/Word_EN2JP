self.addEventListener('message',(nword,mydata)=>{
	saveCookie(nword,mydata);
});