const formDiv = document.getElementById('form-div');
const register = document.getElementById('register');
const extra = document.getElementById('extra');
const cancel = document.getElementById('cancel');
const abtBtn =document.getElementById('about-btn');
const Ebtn = document.getElementById('Ebtn');
const open =document.getElementById('open-');
const close =document.getElementById('close-');
const rytt = document.getElementById('rytt');


register.addEventListener('click',()=>{
    console.log(formDiv.style.display);
  formDiv.style.display="block"; 
  formDiv.style.overflow="hidden"; 
  extra.style.display="block";
});
cancel.addEventListener('click',()=>{
    console.log('clicked');
  formDiv.style.display="none"; 
  formDiv.style.overflow="hidden"; 
  extra.style.display="none";
});
abtBtn.addEventListener('click',()=>{
    window.scrollBy(0,785);
});
Ebtn.addEventListener('click',()=>{
    window.scrollBy(0,1585);
});


// form validation :
//
////
//
//
const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

//show input error message 
function showError(input,message)
{
const formControl=input.parentElement;
formControl.className='form-control error';
const small = formControl.querySelector('small');
small.innerText=message;
}

//show success  message
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check email validity
function checkEmail(input){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(input)){
        showSuccess(input);
    }
    else{
        showError(input,`${getFieldName(input)} is invalid`)
    }
}

//check if the input field is present 
function checkRequired(inputArr)
{
    inputArr.forEach(input => {
       if(input.value==='')
       {
         showError(input,`${getFieldName(input)} is required` );  
       } 
    });
}

//check length function
function checkLength(input,min,max){
if(input.value.length < min){
    showError(input,`${getFieldName(input)} should have min-length of ${min}`);
}
else if(input.value.length > max){
    showError(input,`${getFieldName(input)} length should not exceed ${max}`);
}
else{
    showSuccess(input)
}
}

//to confirm password 
function checkPass(inp1,inp2)
{
    if(inp1.value===inp2.value)
    {
        showSuccess(inp2);
    }
    else{
        showError(inp2,'does not match');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();
checkRequired([username,email,password,password2],checkLength(username,3,15),checkLength(password,6,25),checkPass(password,password2));

});

