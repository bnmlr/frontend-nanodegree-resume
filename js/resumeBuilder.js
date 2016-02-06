
//All resume info in JSON objects
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
	"bioPic": "images/headShot.jpg",
};
//ecapsulated functions in objects using dot notation to keep JSON valid.
//functions iterate through objects, replace placeholders in helper.js, 
//and append to DOM
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);
	for (key in bio.contacts) {
		if (bio.contacts.hasOwnProperty(key)) {
    		var formattedContacts = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
    		$("#topContacts").append(formattedContacts);
    		$("#footerContacts").append(formattedContacts);
		}
	}
	$("#header").append(HTMLskillsStart); //
	//I use forEach loops to iterates through arrays
	//I took the idea of passing "item" from the forums, but I don't understand exactly how it works
	bio.skills.forEach(function(item) {	
		var formattedSkill = HTMLskills.replace("%data%", item);
		$("#skills").append(formattedSkill);
		}
		);
};
bio.display();

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
education.display = function() { 
	var i = 0
	education.schools.forEach(function(item) {	
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedName+formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major[0]);
		$(".education-entry:last").append(formattedMajor);
		i++;
	}
	);
};
education.display();

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
	],
}
work.display = function() { 
	var i = 0
	work.jobs.forEach(function(item) {	
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
	}
	);
};
work.display();

var projects = {
	"projects": [
		{
			"title": "Portfolio Management Course",
      		"dates": "2014-2015",
      		"description": "An online course that teaches the basics of allocating and diversifying an investment portfolio",
      		"images": ["images/pm.png", "images/quiz.png"]
		},
		{
			"title": "Competency-Based Learning Explainer Video",
      		"dates": "2013",
      		"description": "A video that explains competency-based learning",
      		"images": ["images/cbe.png", "images/cbeChart.png"]
		}
	]
};
projects.display = function() {
	var i = 0;
		projects.projects.forEach(function(item) {	
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedDescription);
			var j = 0;
			projects.projects[i].images.forEach(function(item) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedImage);
				j++;
			});
			i++;
		}
		);
};
projects.display();

//google map feature
$("#mapDiv").append(googleMap);