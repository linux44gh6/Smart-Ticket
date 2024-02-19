//add color to the any btn or element
function addBacgourdColor(id){
    const btnId=document.getElementById(id);
    btnId.classList.add('bg-[#1dd100]');
}
//for remove bg color
function removeBackground(id){
    const btnId=document.getElementById(id);
    btnId.classList.remove('bg-[#1dd100]')
}
// for get any elementBy id

function getElemtByid(id){
    const element=document.getElementById(id)
    return element;
}

// for append child

function appendChildToElement(id,value){
    const elemenID=getElemtByid(id);
    const p=document.createElement('h1');
    p.innerText=value
    elemenID.appendChild(p)
}

//get the total booked seat by id
function getTotalBookedSet(id){
    const element=document.getElementById(id);
    const elementText=element.innerText;
    let elementTextToNumber=parseInt(elementText);
    const update=elementTextToNumber+1;
    element.innerText=update
}

//fucntion for ruduce total seat after booking a seat
function updateTotalSeat(id){
const totalSeatText=document.getElementById(id);
const totalSeat=totalSeatText.innerText;
const totalSeatNumber=parseInt(totalSeat);
const update=totalSeatNumber-1;
totalSeatText.innerText=update;

}




//hidden section

function hiddenSection(id){
    const hidsec=document.getElementById(id);
    hidsec.classList.add('hidden');
}


function removeHidden(id){
    const removeHidhen=document.getElementById(id);
    removeHidhen.classList.remove('hidden')
}


function getElementWithID(id){
    const element=document.getElementById(id);
    const elementValue=element.innerText;
    element.innerText='40';
    
}


function removeAppendChild(id){
    const parent=document.getElementById(id);
    for (let i = 0; i <= 4; i++) {
        if (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}


function updateInputFiledValue(id){
    const inputvalue=document.getElementById(id);
    inputvalue.value='';
}

function updatePRice(id){
    const update=document.getElementById(id);
    update.innerText='0';
}

//add
function addAttribute(id){
    const btn=document.getElementById(id);
  btn.disabled = true;
}