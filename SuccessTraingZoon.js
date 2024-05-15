function submitForm() {
    var name = document.getElementById('uname').value;
    var text = /^[A-Z || a-z]+$/;
    var phoneNum = document.getElementById('mobileNum').value;
    var phoneNumberPattern = /^[0]?[789]\d{9}$/;
    var commentText = document.getElementById('comment').value;
    
    if (name === "") {
        document.getElementById('nameError').innerHTML = "Name must be filled out";
        document.getElementById('uname').style.border = "2px solid red";
        return false;
    }
    else if (!name.match(text)) {
        document.getElementById('nameError').innerHTML = "Text Only";
        document.getElementById('uname').style.border = "2px solid red";
        return false;

    }
    else {
        document.getElementById('uname').style.border = "2px solid white";
        document.getElementById('nameError').style.display = "none";
        // return false;
    }
    if (phoneNum === "") {
        document.getElementById("numError").innerHTML = "Please Enter Your Mobile Number";
        document.getElementById('mobileNum').style.border = "2px solid red";
        return false;
    }

    else if (!phoneNum.match(phoneNumberPattern)) {
        document.getElementById("numError").innerHTML = "Mobile number is not valid";
        document.getElementById('mobileNum').style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById('mobileNum').style.border = "2px solid white";
        document.getElementById('numError').style.display = "none";
    }
    if(commentText === "") {
        document.getElementById("commentError").innerHTML = "Please Enter the comment";
        document.getElementById('comment').style.border = "2px solid red";
        return false;
    }
    else if(!commentText.match(text)){
        document.getElementById('commentError').innerHTML = "Text Only";
        document.getElementById('comment').style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById('comment').style.border = "2px solid white";
        document.getElementById('commentError').style.display = "none";
    }
}