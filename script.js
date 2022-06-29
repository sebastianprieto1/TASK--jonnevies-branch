
let taskName = document.getElementById('taskName');
let assignedTo = document.getElementById('assignedTo');
let form = document.getElementById('form');
let setStatus = document.getElementById('setStatus');
let errorElement = document.getElementById('errorMsg');
let description = document.getElementById('description');
let dueDate = document.getElementById('dueDate');

form.addEventListener('submit', (e) => {
    let messages = []
    if(taskName.value === ''){
        messages.push('Task Name is Required')
    }

    if (taskName.value.length < 8){
        messages.push('Task Name must be longer than 8 characters!')
    }
    if (assignedTo.value == "" ){
        messages.push('Task must be assigned!')
    }
    if (setStatus.value == ""){
        messages.push('Please set a status!')
    }
    if (description.value == ""){
        messages.push('Please write a description!')
    }
    if (description.value.length < 20){
        messages.push('Please write a description of at least 20 characters!')
    }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }
    
})

// Limit task due date to future dates only.
dueDate.addEventListener("click", function () {
    let today = new Date();
    let dateToday = String(today.getDate()).padStart(2, "0");
    let monthToday = String(today.getMonth() + 1).padStart(2, "0");
    let yearToday = today.getFullYear();
    let minDate = `${yearToday}-${monthToday}-${dateToday}`;
    dueDate.min = minDate;
  });
  


// modal JS
// Get the modal
var modal = document.getElementById("form");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closebtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
