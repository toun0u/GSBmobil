angular.module('starter.services', [])

.factory('User', function($http, constants, $q){
  return{
    byName: function(name, pwd){
      var deferred = $q.defer();
      var config = {
        method: 'GET',
        url: constants.url + "/user.php",
        params: {
          name: name,
          pwd: pwd
        }
      }
      //console.log(config);
      var response = $http(config);
      response.then(function successCallback(response){
        console.log('success');
        deferred.resolve(response);
      }, function errorCallback(response){
        console.log('failed');
      })
      return deferred.promise;
    }
  }
})

.factory('Event', function($http, constants, $q){
  return{
    All: function(id){
      var deferred = $q.defer();
      var config = {
        method: 'GET',
        url: constants.url + "/event.php",
        params:{
          id: id
        }
      }
      //console.log(config);
      var response = $http(config);
      response.then(function successCallback(response){
        console.log('success');
        deferred.resolve(response);
      }, function errorCallback(response){
        console.log('failed');
      })
      return deferred.promise;
    },
    Valider:function(id, idEvent){
      var deferred = $q.defer();
      var config = {
        method: 'POST',
        url: constants.url + "/participe.php",
        params: {
          idUser: id,
          idEvent: idEvent
        }
      }
      var response = $http(config);
      response.then(function(response){
        console.log('success');
        deferred.resolve(response);
      }, function(response){
        console.log('failed');
      })
      return deferred.promise;
    },
    Refuser:function(id, idEvent, Reason){
      var deferred = $q.defer();
      var config = {
        method: 'POST',
        url: constants.url + "/paparticipe.php",
        params: {
          idUser: id,
          idEvent: idEvent,
          reason: Reason
        }
      }
      var response = $http(config);
      response.then(function(response){
        console.log('success');
        deferred.resolve(response);
      }, function(response){
        console.log('failed');
      })
      return deferred.promise;
    }  
  }
});
