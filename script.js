var loginModal = document.getElementById("modallogin");
var joinModal = document.getElementById("modaljoin");

function donateClick () {
    alert("Thank you for wanting to contribute to SynerD!") //will give user a thank you message for wanting to donate
}

function login () {
    document.getElementById("loginForm").style.display = "block";
}

function closeLogin () {
    document.getElementById("loginForm").style.display = "none";
    loginModal.style.display = "none";
}

function join () {
    document.getElementById("joinForm").style.display = "block";    
}

function closeJoin () {
    document.getElementById("joinForm").style.display = "none";
    joinModal.style.display = "none";
}

// Function to validate DOB format
var dateInput = document.getElementById("dob");

dateInput.onblur = function(){
    document.getElementById("dateError").style.display = "none";
}

dateInput.onkeyup = function(){
    var dateFormat = /^\d{1,2}[\/]\d{1,2}[\/]\d{4}$/;

    if (dateInput.value.match(dateFormat)) {
        document.getElementById("dateError").style.display = "none";   
    } else {
        document.getElementById("dateError").style.display = "block";
    }
}

// Function to validate email
var userEmail = document.getElementById("email");

userEmail.onfocus = function() {
    document.getElementById("emailError").style.display = "block";
}

userEmail.onblur = function() {
    document.getElementById("emailError").style.display = "none";
}

userEmail.onkeyup = function (){
    var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.value.match(format)){
        document.getElementById("emailError").style.display = "none";
    } else {
        document.getElementById("emailError").style.display = "block";
    }
}

// Function to validate username
var username = document.getElementById("username");

username.onfocus = function (){
    document.getElementById("usernameMessage").style.display = "block";
}

username.onblur = function (){
    document.getElementById("usernameMessage").style.display = "none";
}

username.onkeyup = function () {
    if (username.value.length == 8) {
        document.getElementById("usernameMessage").style.display = "none";
    } else {
        document.getElementById("usernameMessage").style.display = "block";
    }
}

// Function to validate password requirements
var userInput = document.getElementById("password");
var lower = document.getElementById("letter");
var upper = document.getElementById("capital");
var length = document.getElementById("length");
var number = document.getElementById("number");

userInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

userInput.onblur = function (){
    document.getElementById("message").style.display = "none";
}

userInput.onkeyup =  function() {
    var small = /[a-z]/g ;
    if (userInput.value.match(small)) {
        lower.style.display = "none";
    } else {
        lower.style.display = "block";
    }

    var big = /[A-Z]/g ;
    if (userInput.value.match(big)) {
        upper.style.display = "none";
    } else {
        upper.style.display = "block";
    }

    if (userInput.value.length <= 8) {
        length.style.display = "none";   
    } else {
        length.style.display = "block";
    }

    var num = /[0-9]/g ;
    if (userInput.value.match(num)) {
        number.style.display = "none";
    } else {
        number.style.display = "block";
    }
}



// Remove modal from window when user clicks anywhere outside
window.onclick = function(event) {
    if (event.target == joinModal || event.target == loginModal) {
        joinModal.style.display = "none";
        loginModal.style.display = "none";
    }
}

/*drag & drop */
function onDragOver(e) {
    e.preventDefault();
    e.target.className = "over-me";
}

function onDragLeave(e) {
    e.target.className = "static";
}

function onDragStart(e) {
    e.target.innerHTML = "<h4>You are Dragging me</h4>";
    document.getElementById('dropzone').className = 'drop-into-me'
}

function onDragEnd(e) {
    e.target.innerHTML = "<h4>Donate Me into the Piggy! :)</h4>";
    document.getElementById('dropzone').className = 'static'
    if (e.target.parentElement.id === "dropzone") {
        e.target.innerHTML = "<h4>Yayyy !! :)</h4>";
    }
}

function onDrop(e) {
    e.preventDefault();
    var draggableDiv = document.getElementById("a-draggable-div");
    draggableDiv.setAttribute("draggable", "false");
    e.target.appendChild(draggableDiv);
}
/*--------------------Members----------------------------*/
// Get input element
let filterInput = document.getElementById('filter-input');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // Get value of input
  let filterValue = document.getElementById('filter-input').value.toUpperCase();
  
  // Get names
  let names = document.getElementById('names');
  let items = names.querySelectorAll('p.card-text');
  
  // Loop through items
  for(let i = 0; i < items.length; i++) {
    let a = items[i].getElementsByTagName('a')[0];
    
    // If match
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      items[i].style.display = '';
    } else {
      items[i].style.display = 'none';
    }
  }
}