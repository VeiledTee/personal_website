$(document).ready(function(){

    // jQuery methods go here...
    
  
  });

// var user_url = 'https://api.github.com/users/' + username + '/repos';

// jQuery.githubUser = function(username, callback) {
//     return jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=CALLBACK");
//   }
  
//   jQuery.fn.loadRepositories = function(username) {
//     this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
  
//     var target = this;
//     $.githubUser(username, function(data) {
//       var repos = data.user.repositories;
//       sortByNumberOfWatchers(repos);
  
//       var list = $('<dl/>');
//       target.empty().append(list);
//       $(repos).each(function() {
//         list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
//         list.append('<dd>' + this.description + '</dd>');
//       });
//     });
  
//     function sortByNumberOfWatchers(repos) {
//       repos.sort(function(a,b) {
//         return b.watchers - a.watchers;
//       });
//     }
//   };