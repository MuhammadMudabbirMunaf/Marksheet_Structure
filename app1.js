document.write("<h1>Marks Sheet</h1>");
document.write("<h1>SSC Part-1 and Part-2</h1>");
document.write("<h1>Board of Secondary Education Karachi</h1>");

var chemMarks = parseInt(prompt("Enter your marks that you get in your Chemistry exam"));
var phyMarks = parseInt(prompt("Enter your marks that you get in your Physics exam"));
var mathMarks = parseInt(prompt("Enter your marks that you get in your Math exam"));
var engMarks = parseInt(prompt("Enter your marks that you get in your English exam"));
var urduMarks = parseInt(prompt("Enter your marks that you get in your Urdu exam"));
var islMarks = parseInt(prompt("Enter your marks that you get in your Islamiat exam"));

document.write("<h3>Marks in Chemistry :" + chemMarks + "</h3>");
document.write("<h3>Marks in Physics :" + phyMarks + "</h3>");
document.write("<h3>Marks in Mathematics :" + mathMarks + "</h3>");
document.write("<h3>Marks in English :" + engMarks + "</h3>");
document.write("<h3>Marks in Urdu :" + urduMarks + "</h3>");
// document.write("<h3>Marks in Islamic Studies :" + islMarks + "</h3>");

var totalMarks = 600;
var obtMarks = (chemMarks + phyMarks + mathMarks + engMarks + urduMarks + islMarks);

if (obtMarks > 600) {
    alert("Marks should not exceed 600. Sum of all marks should be within 600");
}
if (chemMarks > 100) {
    alert("Marks should not exceed 100. Error in chemistry marks");
}
if (phyMarks > 100) {
    alert("Marks should not exceed 100. Error in physics marks");
}
if (mathMarks > 100) {
    alert("Marks should not exceed 100. Error in math marks");
}
if (engMarks > 100) {
    alert("Marks should not exceed 100. Error in english marks");
}
if (urduMarks > 100) {
    alert("Marks should not exceed 100. Error in urdu marks");
}
if (islMarks > 100) {
    alert("Marks should not exceed 100. Error in islamiat marks");
}

document.write("<h3>Total marks : " + totalMarks + "</h3>");
document.write("<h3>Marks Obtained : " + obtMarks + "</h3>");

var percentage = obtMarks/totalMarks * 100;

document.write("<h3>Percentage : " + percentage + "%</h3>");

var roundOff = Math.ceil(percentage);

if (percentage > 100) {
    document.write("<h3>Percentage exceeds 100%. It is wrong.<h3>");
}
if (percentage >= 80 && percentage <= 100) {
    document.write("<h3> Remarks : A-One </h3> ");
    document.write("<h3> Grade : Excellent  </h3> "); 
}
else if (percentage >= 70 && percentage < 80) {
    document.write("<h3> Grade : A  </h3> "); 
    document.write("<h3> Grade : Very Good </h3> "); 
}
else if (percentage >= 60 && percentage < 70) {
    document.write("<h3> Grade : B+  </h3> "); 
    document.write("<h3> Remarks : Good </h3> "); 
}
else if (percentage >= 50 && percentage < 60) {
    document.write("<h3> Grade : B  </h3>"); 
    document.write("<h3> Remarks : Improvement Needed. Nice effort </h3> "); 
}
else if (percentage >= 0 && percentage < 50) {
    document.write("<h3> Grade : Fail </h3> "); 
    document.write("<h3> Remarks : Sorry You Are Fail  </h3> "); 
}
else {
    document.write("<h3> Grade : Not given</h3>");
    document.write("<h3>Remarks : Result not according to criteria. Wrong marks provision from user side. marks should be between 0 - 100</h3>");
}
