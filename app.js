// document.write("<h1>Marks Sheet</h1>");
// document.write("<h1>SSC Part-1 and Part-2</h1>");
// document.write("<h1>Board of Secondary Education Karachi</h1>");

// var chemMarks = parseInt(prompt("Enter your marks that you get in your Chemistry exam"));
// var phyMarks = parseInt(prompt("Enter your marks that you get in your Physics exam"));
// var mathMarks = parseInt(prompt("Enter your marks that you get in your Math exam"));
// var engMarks = parseInt(prompt("Enter your marks that you get in your English exam"));
// var urduMarks = parseInt(prompt("Enter your marks that you get in your Urdu exam"));
// var islMarks = parseInt(prompt("Enter your marks that you get in your Islamiat exam"));

// document.write("<h3>Marks in Chemistry :" + chemMarks + "</h3>");
// document.write("<h3>Marks in Physics :" + phyMarks + "</h3>");
// document.write("<h3>Marks in Mathematics :" + mathMarks + "</h3>");
// document.write("<h3>Marks in English :" + engMarks + "</h3>");
// document.write("<h3>Marks in Urdu :" + urduMarks + "</h3>");
// // document.write("<h3>Marks in Islamic Studies :" + islMarks + "</h3>");

// var totalMarks = 600;
// var obtMarks = (chemMarks + phyMarks + mathMarks + engMarks + urduMarks + islMarks);

// if (obtMarks > 600) {
//     alert("Marks should not exceed 600. Sum of all marks should be within 600");
// }
// if (chemMarks > 100) {
//     alert("Marks should not exceed 100. Error in chemistry marks");
// }
// if (phyMarks > 100) {
//     alert("Marks should not exceed 100. Error in physics marks");
// }
// if (mathMarks > 100) {
//     alert("Marks should not exceed 100. Error in math marks");
// }
// if (engMarks > 100) {
//     alert("Marks should not exceed 100. Error in english marks");
// }
// if (urduMarks > 100) {
//     alert("Marks should not exceed 100. Error in urdu marks");
// }
// if (islMarks > 100) {
//     alert("Marks should not exceed 100. Error in islamiat marks");
// }

// document.write("<h3>Total marks : " + totalMarks + "</h3>");
// document.write("<h3>Marks Obtained : " + obtMarks + "</h3>");

// var percentage = obtMarks/totalMarks * 100;

// document.write("<h3>Percentage : " + percentage + "%</h3>");

// var roundOff = Math.ceil(percentage);

// if (percentage > 100) {
//     document.write("<h3>Percentage exceeds 100%. It is wrong.<h3>");
// }
// if (percentage >= 80 && percentage <= 100) {
//     document.write("<h3> Remarks : A-One </h3> ");
//     document.write("<h3> Grade : Excellent  </h3> "); 
// }
// else if (percentage >= 70 && percentage < 80) {
//     document.write("<h3> Grade : A  </h3> "); 
//     document.write("<h3> Grade : Very Good </h3> "); 
// }
// else if (percentage >= 60 && percentage < 70) {
//     document.write("<h3> Grade : B+  </h3> "); 
//     document.write("<h3> Remarks : Good </h3> "); 
// }
// else if (percentage >= 50 && percentage < 60) {
//     document.write("<h3> Grade : B  </h3>"); 
//     document.write("<h3> Remarks : Improvement Needed. Nice effort </h3> "); 
// }
// else if (percentage >= 0 && percentage < 50) {
//     document.write("<h3> Grade : Fail </h3> "); 
//     document.write("<h3> Remarks : Sorry You Are Fail  </h3> "); 
// }
// else {
//     document.write("<h3> Grade : Not given</h3>");
//     document.write("<h3>Remarks : Result not according to criteria. Wrong marks provision from user side. marks should be between 0 - 100</h3>");
// }

var resMar = alert("Result/Marksheet");

var getid = prompt("Enter Your Full Name").toLocaleUpperCase();
document.getElementById("name").innerText = getid

var getid2 = prompt("Enter Your Father's Name").toLocaleUpperCase();
document.getElementById("fname").innerText = getid2

var getid3 = prompt("Enter Your Date of Birth")
document.getElementById("dob").innerText = getid3

var getid4 = prompt("Enter Your Roll No.")
document.getElementById("sno").innerText = getid4

var getid5 = prompt("Enter Your Examination Centre").toLocaleUpperCase();
document.getElementById("examcen").innerText = getid5

var getid6 = prompt("Enter Your College/Institute Name").toLocaleUpperCase();
document.getElementById("school").innerText = getid6

var getid7 = prompt("Enter Your Group").toLocaleUpperCase();
document.getElementById("group").innerText = getid7

var getid8 = prompt("Enter your Urdu marks, Max-marks is 75");
document.getElementById("urdumarks").innerText = getid8;
document.getElementById("urdutotal").innerText = getid8;

var getid9 = prompt("Enter your English marks, Max-marks is 75");
document.getElementById("engmarks").innerText = getid9;
document.getElementById("engtotal").innerText = getid9;

var getid10 = prompt("Enter your Islamiat Studies marks, Max-marks is 75");
document.getElementById("islmarks").innerText = getid10;
document.getElementById("isltotal").innerText = getid10;

var getid11 = prompt("Enter your Mathematics marks, Max-marks is 100");
document.getElementById("mathmarks").innerText = getid11;
document.getElementById("mathtotal").innerText = getid11;

var getid12 = prompt("Enter your Chemistry marks, Max-marks is 85");
document.getElementById("chemmarks").innerText = getid12;

var getid13 = prompt("Enter your Chemistry Practical marks, Max-marks is 15");
document.getElementById("chempracmarks").innerText = getid13;

var chemTotal = parseInt(getid12) + parseInt(getid13);
document.getElementById("chemtotal").innerText = chemTotal;

var getid14 = prompt("Enter your Physics marks, Max-marks is 85");
document.getElementById("phymarks").innerText = getid14;

var getid15 = prompt("Enter your Physics Practical marks, Max-marks is 15");
document.getElementById("phypracmarks").innerText = getid15;
var physicsTotal = parseInt(getid14) + parseInt(getid15);
document.getElementById("phytotal").innerText = physicsTotal;

var addTotalNumber = parseInt(getid8) + parseInt(getid9) + parseInt(getid10) + parseInt(getid11) + parseInt(getid12) + parseInt(getid13) + parseInt(getid14) + parseInt(getid15)
document.getElementById("TotalMarks").innerText = addTotalNumber;

if(addTotalNumber > 680) {
    document.getElementById("gradeyouget").innerText = "A+";
}
else if (addTotalNumber < 680 && addTotalNumber > 595 ){
    document.getElementById("gradeyouget").innerText = "A";
} 
else if (addTotalNumber < 595 && addTotalNumber > 510){
    document.getElementById("gradeyouget").innerText = "B";
}
else if (addTotalNumber < 510 && addTotalNumber > 425){
    document.getElementById("gradeyouget").innerText = "C";
}
else if (addTotalNumber < 425 && addTotalNumber > 340){
    document.getElementById("gradeyouget").innerText = "D";
}
else if (addTotalNumber < 340 && addTotalNumber > 255){
    document.getElementById("gradeyouget").innerText = "E";
}
else {
    document.getElementById("gradeyouget").innerText = "Fail";
}


document.getElementById("dateofissue").innerHTML = Date();