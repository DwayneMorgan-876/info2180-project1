
window.onload = function newsletter(){

	let button=document.getElementsByTagName('form')[0];
	button.onsubmit=function newsletter(){
		return subMessage(this);
	};

}

function subMessage(formInfo){
	var newMessage= email.value;	
	var messageElement=document.querySelector('.message');
	var message = null;

	if(newMessage){
		message= ("Thank you! Your email address "+ newMessage + " has been added to your mailing list!");
	} else{
		message = ("Please enter a valid email");
	}

	messageElement.innerHTML = message;
	return false;

}