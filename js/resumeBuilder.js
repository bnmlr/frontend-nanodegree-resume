//$("#main").append("Benjamin Miller");
//var awesomeThoughts = "I am Ben and I am Awesome!";

//var funThoughts = awesomeThoughts.replace("Awesome", "FUN");

//console.log(awesomeThoughts);
//console.log(funThoughts);

//$("#main").append(funThoughts);

//var skills = ["writing", "design", "learning theory", "front-end web dev"]; 
//creating an array
 //$("#main").append(skills);
 //appending array to page
//$("#main").append(skills[0]);
//appends first item from array
//var name = "Benjamin Miller";
//var formattedName = HTMLheaderName.replace("%data%", name);

/*var role = "Learning Experience Designer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);*/
//$("#header").prepend(formattedName);

//creating a object containing resume info
var bio = {
	"name": "Benjamin Miller",
	"role": "Learning Experience Designer",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "name@email.com",
		"github": "bnmlr",
		"twitter": "@benmillr",
		"location": "Salt Lake City, UT, US"
	},
	"welcomeMessage": "I'm an accomplished instructional designer with experience in higher education, corporate training, and financial education.",
	"skills": [
		"instructional design", "content development", "front-end web development"
	],
	"bioPic": "images/headShot.jpg"
};

var education = {
	"schools": [
		{
			"name": "Utah State University",
			"location": "Logan, UT, US",
			"degree": "MS",
			"major": ["Instructional Technology and Learning Sciences"],
			"dates": "2013-2015",
			"url": "http://www.usu.edu"
		}, 
		{
			"name": "Brigham Young University",
			"location": "Provo, UT, US",
			"degree": "BA",
			"major": ["English"],
			"dates": "2005-2012",
			"url": "http://www.byu.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to HTML and CSS",
     		"school": "Udacity",
    		"date": "12-2015",
     		"url": "https://www.udacity.com/courses/ud304"
		},
		{
			"title": "JavaScript Basics",
     		"school": "Udacity",
    		"date": "1-2016",
     		"url": "https://www.udacity.com/courses/ud804"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Investools from TD Ameritrade",
     		"title": "Content Manager",
    		"location": "Salt Lake City, UT, US", 
     		"dates": "In progress",
     		"description": "Design and develop blended learning solutions that help people more actively manage their finances."
		},
		{
			"employer": "Allen Communication Learning Services",
     		"title": "Instructional Design Lead",
    		"location": "Salt Lake City, UT, US", 
     		"dates": "2012-2014",
     		"description": "Designed and developed learning solutions to solve performance gaps."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Portfolio Management Course",
      		"dates": "2014-2015",
      		"description": "An online course that teaches the basics of allocating and diversifying an investment portfolio",
      		"images": ["images/pm.png"]
		},
		{
			"title": "Competency-Based Learning Explainer Video",
      		"dates": "2013",
      		"description": "A video that explains competency-based learning",
      		"images": ["images/cbe.png"]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(item)
		{	
		var formattedSkill = HTMLskills.replace("%data%", item);
		$("#skills").append(formattedSkill);
	});
	}

var i = 0
work.jobs.forEach(function(item)
		{	
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
		i++;
		//var formattedJob = HTMLworkStart.replace("%data%", item);
		//$("#skills").append(formattedSkill);
	});