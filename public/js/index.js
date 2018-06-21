firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("signup_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null)
    {

      var email_id = user.email;
      localStorage.setItem('user', JSON.stringify(email_id));
      document.getElementById("user_para").innerHTML = "Welcome User: " + email_id;
      database = firebase.database();
      var ref = database.ref();
      ref.on('value', gotData, errData);
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("signup_div").style.display = "none";
  }
});



function getEmailDataBase()
{
  return JSON.parse(localStorage.getItem('userDataBase'));
}
function getEmail()
{
  return JSON.parse(localStorage.getItem('user'));
}

function getUser(course) {
  //  console.log(course);
  var userRef = database.ref().orderByChild("name").equalTo(course).on('value', function(snapshot) {

    //console.log(snapshot.val());

    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData.user);
      localStorage.setItem('userDataBase', JSON.stringify(childData.user));

    });
  });
}
function errData(err) {
  console.log('Error!');
  console.log(err);
}
function gotData(data) {
  console.log(data.val());
  var course = data.val();
  var keys = Object.keys(course);

  for (var i = 0; i < keys.length; i++) {
    getUser(keys[i]);
    if (getEmail() === getEmailDataBase()) {
     document.getElementById("registerButton_div").style.display = "none";
     document.getElementById("uploadButton_div").style.display = "block";
     return;
    }
    else {
      document.getElementById("uploadButton_div").style.display = "none";
      document.getElementById("registerButton_div").style.display = "block";
    }
  }
}

function login()
{

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });


}

function signUp()
{

  var userEmail = document.getElementById("email_field_sign_up").value;
  var userPass = document.getElementById("password_field_sign_up").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });
}

function createAcc()
{
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "none";
  document.getElementById("signup_div").style.display = "block";
}

function goLogin()
{
  document.getElementById("user_div").style.display = "none";
  document.getElementById("login_div").style.display = "block";
  document.getElementById("signup_div").style.display = "none";
}

function logout()
{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });
}
