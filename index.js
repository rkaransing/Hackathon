/*var rootRef = firebase.database().ref().child("Users");
rootRef.on("child_added", snap=> {

  var name = snap.child("Name").val();
  var email = snap.child("Email").val();

  $("#tablebodyID").append("<tr><td>"+ name +"</td><td>"+ email +"</td><td><button>Remove</button></td></tr>");
});
*/





//automatic detects logged in or not.





function showLoginDialog()
{

  var dialog = document.querySelector('#loginDialog');
  dialog.showModal();
}

/*------------------------ LOGIN PROCESS ----------------------------*/
function onLoginClick(){
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    if(email !="" && password !="")
    {
              $("#loginProgress").show();
              $("#loginButton").hide();
              $("#loginModalCancelButton").hide();
              $("#googleButton").hide();

              firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
                alert(result);
                window.location = "HomePage.html";
              }).catch(function(error) {
                // Handle Errors here.
                      alert(error.message);
                      $("#loginError").show().text(error.message);
                      $("#loginProgress").hide();
                      $("#loginButton").show();
                      $("#googleButton").show();

                      $("#loginModalCancelButton").show();
                // ...
              });

    }
}




/*-------------------------------------------------------------------*/
/*----------------------- LOGOUT PROCESS-----------------------------*/

function SignOutFunction(){

firebase.auth().signOut().then(function() {
// Sign-out successful.

window.location='index.html';

}).catch(function(error) {
// An error happened.
});
}
