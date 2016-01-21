//$("#main").append("Benjamin Miller");
//var awesomeThoughts = "I am Ben and I am Awesome!";

//var funThoughts = awesomeThoughts.replace("Awesome", "FUN");

//console.log(awesomeThoughts);
//console.log(funThoughts);

//$("#main").append(funThoughts);

var name = "Benjamin Miller";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Learning Experience Designer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

