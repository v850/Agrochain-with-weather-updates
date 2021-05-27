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
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// use firebase's signout method.
let logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', function(e) {
    firebase.auth().signOut().then(() => {
        console.log('Logging out...');
        // direct to main login/resgistration page
        window.location.href ='index.html';
    }).catch(err => {
        console.log(err);
    })
});
