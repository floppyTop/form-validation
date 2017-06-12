//Problem: Hints are shown even when form is valid.
//Solution: Hide and show them at appropriate times.
var $password = $("#password");
var $confirmPassword = $("#confirm_password");


//Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function isPasswordMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() & isPasswordMatching();
}

function passwordEvent(){
    if(isPasswordValid()) {
    $(this).next().hide();
  } else {
    $(this).next().show();
  }
}



//When event happens on password input
  //Disable Submit by default.
function disableDefault() {
  $("#submit").prop("disabled", true);
}

function confirmPasswordEvent() {
    //Find out if password and confirmation match
  if(isPasswordMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
    //Hide hint if match
    //Else show hint
}

function enableSubmitEvent() {
  if (isPasswordValid() == false || isPasswordMatching() == false) {
      $("#submit").prop("disabled", true);
  }
  if (isPasswordValid() == true && isPasswordMatching() == true) {
    $("#submit").prop("disabled", false)
  }
}


//When event happens on confirmation input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
