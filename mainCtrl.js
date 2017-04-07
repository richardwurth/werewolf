angular.module('app').controller('mainCtrl', function($scope){

  // let firstInitialPrompt = prompt("What is the initial of your first name?");

// $scope.firstInitial = firstInitialPrompt;

$scope.profileFrame = "http://orig11.deviantart.net/e3ca/f/2015/137/c/b/gothic_mirror_frame_png_by_otbwriter-d8tjtd6.png";
  // Below is the daytime and night time changing function
  let daytime = false;
  $scope.backgroundChange = function(){
    if (daytime === false) {
    $('body').css('background-image','url("https://dl.dropbox.com/s/12i9f4kxm9uz71c/day_layered.jpg")');
    daytime = true;
  } else {
    $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
    daytime = false;
  }
  };
  // Above is the daytime and night time changing function

});
