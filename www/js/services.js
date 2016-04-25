angular.module('starter.services', [])

.factory('User', function($http, constants, $q){
  return{
    byName: function(name, pwd){
      var deferred = $q.defer();
      var config = {
        method: 'GET',
        url: constants.url + "/index.php",
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
        console.log('NULL');
      })
      return deferred.promise;
    }
  }
})

.factory('Event', function(){
  var event = [{
    id:1,
    lieu: 'St Malo',
    description: 'Venez nombreux',
    dateDebut:'2015-02-11',
    dateFin:'2015-02-11',
    type:'Réunion',
    User:'Jean-Charles',
    heureDebut:'12:00',
    heureFin:'16:00'
  },{
    id:2,
    lieu: 'Paris',
    description: 'un autre event',
    dateDebut:'2015-02-11',
    dateFin:'2015-02-11',
    type:'Réunion',
    User:'Jean-Hubert',
    heureDebut:'17:00',
    heureFin:'19:00'
  }]
  return{
    All: function(){
      return event;
    }
  }
});
