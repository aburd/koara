$(document).ready(function() {

  $('#picMain').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1},3000);
    
  $("#koarss").rssfeed("http://www.clubberia.com/en/clubs/1059-KOARA/rss.xml", {
    limit: 10
  });

});