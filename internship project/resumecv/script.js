function addnewAQfield() {
 //   console.log("Adding new field");

let newNode=document.createElement("textarea");
newNode.classList.add("form.control");
newNode.classList.add("AQfield()");
newNode.classList.add("mt-3");
newNode.setAttribute("rows",2);
newNode.setAttribute('placeholder','Enter Here')

//let AQOb = document.getElementById("AQ");
//let AQaddButtonOb = document.getElementById("AQaddButton");

//AQOb.insertBefore(newNode, AQaddButtonOb);
}

//generatingCV
function generatecv()
{
let namefield=document.getElementById('namefield').value;
let nameT1=document.getElementById('nameT1');

nameT1.innerHTML = namefield;
//direct
document.getElementById('nameT2').innerHTML=namefield;

//phonenumber
document.getElementById("phoneT").innerHTML = document.getElementById("phonenumber").value;

//Address
document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;

//email
document.getElementById("emailT").innerHTML = document.getElementById("emailfield").value;

//academic qualification
document.getElementById("AQT").innerHTML = document.getElementById("AQfield").value;
//let aqs = document.getElementsByClassName("AQ");
//let str1 = "";

//for(let e of aqs) 
//{
   // str1 = `${str1} + <li> \${e.value} </li>`;
//}

//document.getElementById('AQT').innerHTML = str1;


//technicalskills
document.getElementById("TST").innerHTML = document.getElementById("technicalskills").value;


//Hobbies
document.getElementById("hobbiesT").innerHTML = document.getElementById("Hobbiesfield").value;

//compnayname
document.getElementById("companyT").innerHTML = document.getElementById("companyfield").value;

//jobtitle
document.getElementById("jobT").innerHTML = document.getElementById("jobfield").value;

//city
document.getElementById("cityT").innerHTML = document.getElementById("cityfield").value;

//state
document.getElementById("stateT").innerHTML = document.getElementById("statefield").value;

//jobdescription
document.getElementById("JDT").innerHTML = document.getElementById("jobdescriptionfield").value;

//internship
document.getElementById("IT").innerHTML = document.getElementById("internshipfield").value;

//project
document.getElementById("PT").innerHTML = document.getElementById("projectfield").value;

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';
}

//print
function printcv()
{
    window.print();
}

