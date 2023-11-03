import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDl0nWoBYdttE5dDeLBXDdC_BC8DKWVlxM",
  authDomain: "sem-2-mini-project.firebaseapp.com",
  projectId: "sem-2-mini-project",
  storageBucket: "sem-2-mini-project.appspot.com",
  messagingSenderId: "376678793687",
  appId: "1:376678793687:web:2bc9875a8e154bad1b8b92",
  measurementId: "G-V18FWHXS9H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

document.getElementById("register").addEventListener("click", function() {
  const email =  document.getElementById("email").value;
  const password = document.getElementById("password").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Registration successfully!!");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    alert(error);
  });		  		  
});
//----- End

//----- Login code start	  
document.getElementById("login").addEventListener("click", function() {
  const email =  document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert(user.email+" Login successfully!!!");
    document.getElementById('logout').style.display = 'block';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage);
  });		  		  
});
//----- End

//----- Logout code start	  
document.getElementById("logout").addEventListener("click", function() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('Sign-out successful.');
    alert('Sign-out successful.');
    document.getElementById('logout').style.display = 'none';
  }).catch((error) => {
    // An error happened.
    console.log('An error happened.');
  });		  		  
});
//----- End