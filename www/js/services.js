angular.module('starter.services', [])

.factory('User', function(){
  var users = [{
    id:0,
    email: 'toto@toto.fr',
    pwd: 'toto'
  }, {
    id:1,
    email: 'titi@titi.fr',
    pwd: 'titi'
  }]
  return{
    byName: function(name, pwd){
      for(var i = 0; i<users.length; i++){
        //console.log(users[i]);
        if(users[i].email == name && users[i].pwd == pwd){
          //console.log(name);
          //console.log(pwd);
          return users[i];
        }
      }
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
