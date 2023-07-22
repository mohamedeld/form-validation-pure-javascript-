const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

const formBtn = document.querySelector('button');

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
            return;
        }else{
            showSuccess(input)
        }
    })
};

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Password do not match');
        return;
    }else{
        showSuccess(input2);
    }
};

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};



function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min}`);
        return;
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be at most ${max}`);
        return;
    }else{
        showSuccess(input);
    }
}


form.addEventListener('click', function(e){
    e.preventDefault();
    checkRequired([username,email,password,confirmPassword]);
    checkLength(username,3,15);
    checkLength(password,3,25);
    checkPasswordMatch(password,confirmPassword);
});