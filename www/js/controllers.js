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
  var event = Event.All();
  console.log(event);
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
});
