const events = {

paper:{

title:"Tech Arena",

description:"Present your innovative ideas and research before an expert panel.",

rules:[
"Maximum 2 members per team",
"Presentation should be within the allotted time",
"Original work only"
],

team:"1 - 2 Members",

duration:"8 + 2 Minutes",

judging:"Innovation, Presentation & Technical Knowledge",

venue:"Will be Announced",

faculty:"To be Updated",


},

prompt:{

title:"Prompt Craft",

description:"Solve exciting AI tasks using prompt engineering skills.",

rules:[
"Individual Participation",
"Use only the provided AI platform",
"Follow the given problem statement"
],

team:"Individual",

duration:"45 Minutes",

judging:"Accuracy, Creativity & Efficiency",

venue:"Will be Announced",

faculty:"To be Updated",


},

error404:{

title:"Bug Hunt",

description:"Find bugs and solve coding challenges before time runs out.",

rules:[
"Individual Participation",
"No internet browsing",
"Judge's decision is final"
],

team:"Individual",

duration:"60 Minutes",

judging:"Correctness & Speed",

venue:"Will be Announced",

faculty:"To be Updated",



},

aiq:{

title:"Brain Byte",

description:"Test your Artificial Intelligence knowledge through quizzes.",

rules:[
"Individual Participation",
"No mobile phones",
"Negative marking may apply"
],

team:"Individual",

duration:"30 Minutes",

judging:"Highest Score",

venue:"Will be Announced",

faculty:"To be Updated",


},


admad:{

title:"Cine Quest",

description:"Create entertaining advertisements using your imagination.",

rules:[
"Props allowed",
"Time limit must be followed",
"Family-friendly content only"
],

team:"2 - 5 Members",

duration:"5 Minutes",

judging:"Creativity & Presentation",

venue:"Seminar Hall",

faculty:"To be Updated",



},

mute:{

title:"Lyrics Decode",

description:"Guess the word or movie through silent acting.",

rules:[
"No speaking",
"Follow the game rules",
"Time based rounds"
],

team:"2 Members",

duration:"20 Minutes",

judging:"Correct Guesses",

venue:"Classroom",

faculty:"To be Updated",


},

laugh:{

title:"Memora",

description:"Control your laughter through hilarious challenges.",

rules:[
"No distractions",
"Fair play",
"Judges' decision is final"
],

team:"Individual",

duration:"15 Minutes",

judging:"Last Person Standing",

venue:"Open Stage",

faculty:"To be Updated",


}

};


const modal=document.getElementById("eventModal");

const modalBody=document.getElementById("modalBody");

const buttons=document.querySelectorAll(".view-details");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

const event=events[button.dataset.event];

let rules="";

event.rules.forEach(rule=>{

rules+=`<li>${rule}</li>`;

});

modalBody.innerHTML=`

<h2>${event.title}</h2>

<p>${event.description}</p>

<h4>Rules</h4>

<ul>${rules}</ul>

<h4>Team Size</h4>

<p>${event.team}</p>

<h4>Duration</h4>

<p>${event.duration}</p>

<h4>Judging Criteria</h4>

<p>${event.judging}</p>

<h4>Venue</h4>

<p>${event.venue}</p>

<h4>Faculty Coordinator</h4>

<p>${event.faculty}</p>



<a href="https://docs.google.com/forms/d/e/1FAIpQLSejGFXTR8E-fgLzxX6WQyLOOHGmxmiJYC2p6WIedvreE4hs9w/viewform?usp=header" class="btn btn-primary">

Register

</a>

`;

modal.classList.add("active");

});

});


document.querySelector(".close-modal").addEventListener("click",()=>{

modal.classList.remove("active");

});


window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

}

});