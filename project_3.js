// Variable 
const accordion = document.getElementsByClassName('content-container');

for ( index = 0; index < accordion.length; index++) {
   
    accordion[index].addEventListener('click', function(){
        this.classList.toggle('active');
    })
};