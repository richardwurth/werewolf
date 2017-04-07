angular.module('app').controller('mainCtrl', function($scope){

  // let firstInitialPrompt = prompt("What is the initial of your first name?");

// $scope.firstInitial = firstInitialPrompt;
$scope.firstOne = "";
$scope.lastOne = "";
$scope.fullNameOne = "";

let masterPassword = "";

$scope.passwordSet = function(){
  masterPassword = prompt("Please enter what you would like the password to be set to.");
  $('#password-set').hide();
};

$scope.addOne = function(){
  let passwordCheck = prompt("Please enter the Master Password");
  if (passwordCheck === masterPassword) {
  let fullNameOne = prompt('What is the Full Name of the player to add?');
  $scope.fullNameOne = fullNameOne;
  let splitNameOne = fullNameOne.split(" ");
  $scope.firstOne = splitNameOne[0].charAt(0).toUpperCase()+".";
  $scope.lastOne = splitNameOne[1].charAt(0).toUpperCase()+".";
  $('#create').hide();
  $('#delete').hide();
  $('#kill').show();
} else {
  alert("Incorrect password was entered.");
}
};

$scope.deleteOne = function(){
  let passwordCheck = prompt("Please enter the Master Password");
  if (passwordCheck === masterPassword) {
  $('#profile-one').hide();
} else {
  alert("Incorrect password was entered.");
}
};

$scope.killOne = function(){
  let passwordCheck = prompt("Please enter the Master Password");
  if (passwordCheck === masterPassword) {
  $('#profile-one-content').hide();
  $('#rip-one').css("display","flex");
  $('#rip-one-name').show();
} else {
  alert("Incorrect password was entered.");
}
};
$scope.reviveOne = function(){
  let passwordCheck = prompt("Please enter the Master Password");
  if (passwordCheck === masterPassword) {
  let response = prompt(`You are about to revive this person; type YES to confirm this action.`).toUpperCase();
  if (response === "YES") {
    $('#profile-one-content').show();
    $('#rip-one').css("display","none");
  } else {
    alert("You have responded with something other than YES; no changes will take affect.");
  }
} else {
  alert("Incorrect password was entered.");
}
};


$scope.profileFrame = "http://orig11.deviantart.net/e3ca/f/2015/137/c/b/gothic_mirror_frame_png_by_otbwriter-d8tjtd6.png";
  // Below is the daytime and night time changing function
  let daytime = false;
  // var nextTime = "Day";
  $scope.timeOfDay = "Day";

  $scope.backgroundChange = function(){
    let passwordCheck = prompt("Please enter the Master Password");
    if (passwordCheck === masterPassword) {
    if (daytime === false) {
    $('body').css('background-image','url("https://dl.dropbox.com/s/12i9f4kxm9uz71c/day_layered.jpg")');
    daytime = true;
    $scope.timeOfDay = "Night";
    // nextTime = "Night"
  } else {
    $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
    daytime = false;
    $scope.timeOfDay = "Day";
    // nextTime = "Day";
  }
} else {
  alert("Incorrect password was entered.");
}
  };
  // Above is the daytime and night time changing function

});
