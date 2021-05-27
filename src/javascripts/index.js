let  firebaseConfig = {
	apiKey: "AIzaSyAPYa5Xs8Cg8lit3X_vpILLpIJrbd16_bk",
	authDomain: "sms-api-7ccf9.firebaseapp.com",
	databaseURL: "https://sms-api-7ccf9-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "sms-api-7ccf9",
	storageBucket: "sms-api-7ccf9.appspot.com",
	messagingSenderId: "118746606408",
	appId: "1:118746606408:web:054dbabfdd0343d4eda17d",
	measurementId: "G-CYPHQ7SM1Q"
  };
// import our functions from ourFunctions.js


// ===== Firebase configuration (start) ==== //

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ===== Firebase configuration (end) ==== //

// button variables
let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');
let submitBtn = document.getElementById('submitBtn');
// input field variables
let userInput = document.getElementById('login');
let passInput = document.getElementById('password');


// login tab
loginBtn.addEventListener('click', function(e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    registerBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Login';
});

//register tab
registerBtn.addEventListener('click', function(e) {
    userInput.value = "";
    passInput.value = "";
    this.className = 'active';
    loginBtn.className = 'inactive underlineHover';
    submitBtn.value = 'Register';
});

// submit button
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (submitBtn.value === 'Register') {
        // check if any inputs are empty
        if (checkIfInputEmpty(userInput.value, passInput.value)) {
            console.log('Please fill in all fields.');
        } else {

               registerUser(userInput.value, passInput.value);
               alert("registered successfully");
            }
    } else if (submitBtn.value === 'Login') {
        loginUser(userInput.value, passInput.value);
    }
})
// register email and password to firebase
function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log("User successfully created!");
            // clear inputs
            document.getElementById('login').value = '';
            document.getElementById('password').value = '';
        }).catch(err => {
            console.log(err.message);
        })
}

// log into app
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Successfully authenticated!');
            // direct to logic success page
            window.location.href = 'loggedIn.html';
        }).catch(err => {
            console.log(err.message);
        })
}

// simple error check to see if inputs are empty
function checkIfInputEmpty(userInput, passInput) {
    if (userInput.length === 0 || passInput.length === 0) {
        return true
    } else {
        return false
    }
}
