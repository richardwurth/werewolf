angular.module('app').controller('mainCtrl', function($scope){

  // let firstInitialPrompt = prompt("What is the initial of your first name?");

// $scope.firstInitial = firstInitialPrompt;
// $scope.firstOne = "";
// $scope.lastOne = "";
// $scope.fullNameOne = "";


// $scope.profiles = ["profile.html"];
const profiles = [{}];
$scope.profileTracker = [];
$scope.addProfile = function() {
  let fullNameOne = prompt('What is the Full Name of the player to add?');
  let splitNameOne = fullNameOne.split(" ");
  let newPerson = {
    fullNameOne: fullNameOne,
    firstName: fullNameOne,
    // $scope.profileTracker[index].firstName = fullNameOne;
    lastOne: splitNameOne[1].charAt(0).toUpperCase()+".",
    firstOne: splitNameOne[0].charAt(0).toUpperCase()+".",
    custom: true,
    kill: false
    // toggleCustom: function() {
    //   console.log(this.custom);
    //   this.custom = !this.custom;
    // },


    // $scope.profileTracker[index].lastOne = splitNameOne[1].charAt(0).toUpperCase()+".";
    // $scope.profileTracker[index].firstOne = splitNameOne[0].charAt(0).toUpperCase()+".";

  };
  $scope.profileTracker.push(newPerson);
  console.log($scope.profileTracker);
};

let masterPassword = "";

$scope.passwordSet = function(){
  masterPassword = prompt("Please enter what you would like the password to be set to.");
  $('#password-set').hide();
};

$scope.addOne = function(index){
    let fullNameOne = prompt('What is the Full Name of the player to add?');
    $('#create').hide();
    $('#delete').hide();
    $('#kill').show();
  // }
//   let passwordCheck = prompt("Please enter the Master Password");
//   if (passwordCheck === masterPassword) {
// } else {
//   alert("Incorrect password was entered.");
// }
};

$scope.deleteOne = function(){
  let passwordCheck = prompt("Please enter the Master Password");
  if (passwordCheck === masterPassword) {
  $('#profile-one').hide();
} else {
  alert("Incorrect password was entered.");
}
};

// $scope.killOne = function(){
//   let passwordCheck = prompt("Please enter the Master Password");
//   if (passwordCheck === masterPassword) {
//   $('#profile-one-content').hide();
//   $('#rip-one').css("display","flex");
//   $('#rip-one-name').show();
// } else {
//   alert("Incorrect password was entered.");
// }
// };
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


$scope.profileFrame = "http://img06.deviantart.net/b2bc/i/2015/202/b/7/638_surf_frame_by_tigers_stock-d926rr4.png";
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
