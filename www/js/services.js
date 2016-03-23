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
});
