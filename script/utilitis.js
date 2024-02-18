//add color to the any btn or element
function addBacgourdColor(id){
    const btnId=document.getElementById(id);
    btnId.classList.add('bg-[#1dd100]');
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