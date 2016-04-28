angular.module('starter.controllers', [])

.controller('LogCtrl', function($scope, User, $location, $state){
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
    //console.log(user);
    user.then(function(){
      if(user.$$state.value.data[0][0] !=0){
        if(ok == 'true')
        {
          window.localStorage.setItem('user',mail.value+'/'+pwd.value);
        }
      window.localStorage.setItem('id', user.$$state.value.data[0]['id']);
      $location.path('/tab/event').replace();
      //$state.go('tab.event');
      }else{
        console.log('utilisateur non valide');
      }
    })
  }
})

.controller('eventCtrl', function($scope, Event, $ionicModal,$timeout, $state){
  var event = Event.All(window.localStorage.getItem("id"));
  //récupération des Evenements auxquels l'utilisateurs à répondu
  console.log(event);
  event.then(function(){
    $scope.events=event.$$state.value.data;
    $scope.message= "";
    if($scope.events.length == 0){
      $scope.message = "vous n'avez pas d'événements à venir";
    }
    //console.log($scope.events.length);
  }, function(reason){
    console.log=reason;
  });
  //récupération est Evenements en attente de réponse;
  var Incoming=Event.Incoming(window.localStorage.getItem('id'));
    console.log(Incoming);
    Incoming.then(function(){
      $scope.incoming = Incoming.$$state.value.data;
      $scope.message="";
      if($scope.incoming.length == 0){
        $scope.message = "Pas d'évenements prévus";
      }
    });

  $ionicModal.fromTemplateUrl('modalsTemplates/refusModal.html',{
    scope:$scope
  }).then(function(modal){
    $scope.modal=modal;
  });
  //ouvre le modal de confirmation du refus
  $scope.refuser=function(id){
    //console.log(id);
    $scope.leEvent=id;
    $scope.modal.show();
  }
  //valide le refus à la base de donnée
  $scope.confirmerRefus= function(idEvent){
    var idUser = window.localStorage.getItem('id');
    var res = Event.Refuser(idUser, idEvent, reason.value);
    $scope.message='Votre refus a été pris en compte';
    $timeout(function(){
      $scope.message=' ';
      $scope.modal.hide()
    }, 2500);
 
  }

  $scope.closeModal=function(){
    $scope.message=' ';
    $scope.modal.hide();
  }

  $scope.valider=function(idEvent){
    var idUser = window.localStorage.getItem('id');
    //console.log(idUser);
    var res = Event.Valider(idUser, idEvent);
    //console.log(res);
  }
});
