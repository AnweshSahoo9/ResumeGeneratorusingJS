function addNewWEField() {
    //console.log("Adding new Field")

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute('rows',3);

    let weOb=document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {
    //console.log("Adding field in aq")

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control")
    newNode.classList.add("aqField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder","Enter Here")

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode,aqAddButtonOb);
}

//generating cv
function generateCV() {
    // console.log("Generate CV")
    let nameField = document.getElementById('nameField').value;

    let nameT1 = document.getElementById('nameT')

    nameT1.innerHTML=nameField;

    //direct

    document.getElementById('nameT2').innerHTML=nameField;

    //contacts
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    //linkedIn
    document.getElementById('linkT').innerHTML=document.getElementById('linkedField').value;

    //github
    document.getElementById('gitT').innerHTML=document.getElementById('githubField').value;

    //email
    document.getElementById('mailT').innerHTML=document.getElementById('emailField').value;

    //objective
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    //work experience
    let wes = document.getElementsByClassName("weField");

    let str=''

    for(let e of wes)
    {
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML=str;

    //academic qualification
    let aqs = document.getElementsByClassName("aqField")

    let str1=''

    for(let e1 of aqs)
    {
        str1=str1+`<li> ${e1.value} </li>`
    }

    document.getElementById('aqT').innerHTML=str1;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

//printcv
function printCV()
{
    window.print();
}