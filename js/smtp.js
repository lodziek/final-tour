const form = document.querySelector('#contact'),
message = document.querySelector('#message'),
errorElement = document.querySelector('.error');

// email : final.test.project.2022@gmail.com
// password : Test_1234

form.addEventListener('submit', (event) =>{
    var messages = [];

    const name = document.querySelector('#name');


    if(name.value === '' || name.value == null || name.value.length >= 50){
        messages.push('Check your Name please !!!');
    } else if(message.value.length >= 500){
        messages.push('Your Message is too long !!!');
    } else if(messages.length > 0){
        event.preventDefault();
        errorElement.innerHTML = messages.join(', ');
    } else {
        alert('Your Message Has Been Sent.');
    }

})

