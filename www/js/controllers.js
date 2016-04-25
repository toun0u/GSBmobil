angular.module('starter.controllers', [])

.controller('LogCtrl', function($scope, User, $location){
  //console.log($location.absUrl());
  //console.log($location.url());
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
  //window.localStorage.clear();
  
  $scope.connexion = function(){
    var user = User.byName(mail.value, pwd.value);
    var ok = ischeck.innerHTML;
    console.log(user);
    user.then(function(){
      if(user.$$state.value.data[0][0] !=0){
        if(ok == 'true')
        {
         window.localStorage.setItem('user',mail.value+'/'+pwd.value);
        }
      $location.path('/event').replace();
      }else{
        console.log('utilisateur non valide');
      }
    })
  }
})

.controller('eventCtrl', function($scope, Event, $ionicModal){
  $scope.events = Event.All();
  $ionicModal.fromTemplateUrl('modalsTemplates/refusModal.html',{
    scope:$scope
  }).then(function(modal){
    $scope.modal=modal;
  });
  
  $scope.refuser=function(id){
    console.log(id);
    $scope.leEvent=id;
    $scope.modal.show();
  }
  $scope.closeModal=function(){
    $scope.modal.hide();
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
