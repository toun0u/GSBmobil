angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LogCtrl', function($scope, User, $location){
  $scope.isChecked = {
    value : false 
  };
  if(window.localStorage.getItem("user"))
  {
    var user = window.localStorage.getItem("user");
    var log = user.split("/");
    document.getElementById('mail').value=log[0];
    document.getElementById('pwd').value=log[1];
  }
  window.localStorage.clear();
  
  $scope.connexion = function($scope){
    var user = User.byName(mail.value, pwd.value);
    console.log(user);
    console.log(ischeck.innerHTML);
    var ok = ischeck.innerHTML;
    if(ok == 'true' && user)
    {
      window.localStorage.setItem('user',mail.value+'/'+pwd.value);
    } 
  }
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
