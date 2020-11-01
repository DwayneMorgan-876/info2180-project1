/* Add your JavaScript to this file */
window.onload = function newsletter(){

	let form=document.getElementsByTagName('form').item(0);
	form.onsubmit=function newsletter(){
		return addEmail(this);
	};

}

function addEmail(formData){
	let newEmail= formData.email.value;
	var messageElement=document.querySelector('.message');
	var message = null;

	if(newEmail){
		message= "Thank you! Your email Address $(newEmail) has been added to your mailing list";
	} else{
		message = "Please enter a valid email";
	}

	messageElement.innerHTML = message;
	return false;
}