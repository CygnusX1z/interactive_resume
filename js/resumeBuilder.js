//Bio
var bio = {
		"name" : "Jorge Luis Zuniga",
		"role" :"Web Developer",
		"contacts" : {
			"email" : "myEmail@example.com",
			"mobile" : "555-555-5555",
			"location" : "Katy, TX"
		},
		"bioPic" : "images/fry.jpg",
		"welcome" : "Welcome to my resume!",
		"skills" :  ["JS","HTML","ColdFusion","TSQL"]
	};
var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//Mobile
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

//Email
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

//Location
var formattedLoc=HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLoc);
$("#footerContacts").append(formattedLoc);

//BioPic
var formattedBioPic=HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

//Welcome
var formattedWelcomeMsg=HTMLWelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcomeMsg);

//Skills
function displaySkills() {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {		
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};
displaySkills();

//Work
var work = {
	"jobs" : [
	  {
		  "employer" 	: "AT&T",
		  "title" 		: "Applications Developer",
		  "dates" 		: "1997 to Present",
		  "location" 	: "Houston, TX",
		  "description" : "Develop web applications using ColdFusion for the front-end and Microsoft SQL for the backend."
	  },
	  {
		  "employer" 	: "Ferrelgas",
		  "title" 		: "Delivery Driver",
		  "dates" 		: "1994 to 1997",
		  "location" 	: "Pearsall, TX",
		  "description" : "Deliver propane gass to customers."
	  },
	  {
		  "employer" 	: "U-Haul",
		  "title" 		: "Assistant Store Manager",
		  "dates" 		: "1990 to 1994",
		  "location" 	: "San Antonio, TX",
		  "description" : "Manage truck rentals, storage rooms, and hitch installations."
	  }
	]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);		 
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);		 
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);		
	}
};
displayWork();


//Projects
var projects = {
  "projects" : [
     {
    	 "title" 		: "My Project 1",
    	 "dates" 		: "2014",
    	 "description" 	: "Pelicans are a genus of large water birds comprising the family Pelecanidae. They are characterised by a long beak and large throat pouch used for catching prey and draining water from the scooped up contents before swallowing. They have predominantly pale plumage, the exceptions being the brown and Peruvian pelicans. The bills, pouches and bare facial skin of all species become brightly coloured before the breeding season.",
    	 "images" 		: "images/Pelikan_Walvis_Bay.jpg"
     },
     {
    	 "title" 		: "My Project 2",
    	 "dates" 		: "2009",
    	 "description" 	: "In 1576 the provinces of the Habsburg Netherlands signed the Pacification of Ghent, to make peace with the rebelling provinces Holland and Zeeland, and also to form an alliance to drive the occupying Spanish out of the country.",
    	 "images" 		: "images/leonis_ghent.jpg"
     }
  ]
};

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);		
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);		
	}
};
displayProjects();

//Education
var education = {
		"schools": [
	    {
	    	"name" 		: "Colorado Technical University",
	    	"location" 	: "Colorado Springs, CO",
	    	"dates" 	: "2007",
	    	"major" 	: "Business Administration & Information Technology",
	    	"degree" 	: "Bachelor of Science",
	    	"url" 		: "http://www.coloradotech.edu/"
	    },
	    {
	    	"name" 		: "Aims Community College",
	    	"location" 	: "Greeley, CO",
	    	"dates" 	: "2004",
	    	"major" 	: "Telecommunications",
	    	"degree" 	: "Associate of Arts",
	    	"url" 		: "http://www.aims.edu/"
	    }
	  ]
,
	"onlineCourses" : [
		   {
			   "school" : "Udacity",
			   "title" 	: "Intro to HTML and CSS",
			   "dates" 	: "2014",
			   "url"	: "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617/m-2698138588"
		   },
		   {
			   "school" : "Udacity",
			   "title" 	: "JavaScript Basics",
			   "dates" 	: "2014",
			   "url"	: "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1946788554/m-2550568535"
		   }		   
		]
	};

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);		
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);		 
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);		 
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);		 
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);		 
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);		 
		var formattedURL = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedURL);
	}	
	
	$("#education").append(HTMLonlineClasses);
	for (school in education.onlineCourses) {
		$("#education").append(HTMLschoolStart); 
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);	
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
		var formattedSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedSchoolTitle);		
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		$(".education-entry:last").append(formattedOnlineDate);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedURL);
	}
};
displayEducation();


//internationalizeButton DOES NOT WORK!
/*
 * function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLowerCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1] + " " + name[2];
}
$('#main').append(internationalizeButton); 
*/

//you want to see a map? here's a map.
$("#mapDiv").append(googleMap);