function validateform(){  
var name=document.myform.name.value;  
var number=document.myform.number.value;  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf("."); 
if (name.length<3){  
    alert("Name is too short!!");  
    return false;  
  }
  else if (number.length<10){  
    alert("Invalid Number!!");  
    return false;  
  }
  else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address.");  
    return false;  
    }  
  else
  return true;
 }