let count = 0;
let ticket=0;
const scrollbtn = document.getElementById('scrollButton');
const targetSection = document.getElementById('targetSection');
scrollbtn.addEventListener('click', function () {
    targetSection.scrollIntoView({ behavior: 'smooth' })
})

// add evet to the  seat btn;
const btns = document.querySelectorAll('.btn1');
for (const btn of btns) {
    btn.addEventListener("click" ,function () {
      
      if(ticket<=3){
        const btnID = btn.innerText;
        addBacgourdColor(btnID);
        const element = getElemtByid('seat-booked');
        appendChildToElement('seat-booked', btnID)
        const seatClass = getElemtByid('seat-class');
        appendChildToElement('seat-class', "Economic")

        const seatPrice = getElemtByid('seat-price');
        appendChildToElement('seat-price', '550')

        let nmb = getTotalBookedSet('totalBookedSeat');
        //    console.log(nmb)

        const total = updateTotalSeat('total-seat1')
        // console.log(total)

        count++;

        const totalSeatBooked = document.getElementById('totalBookedSeat');
        const totalSeatB = totalSeatBooked.innerText;
        const totalSeatNUmber = parseInt(totalSeatB);
        if (count === 4) {
            const applyBtn = document.getElementById('apply-btn');
            applyBtn.removeAttribute('disabled');
        }
        const seatElement = document.getElementById('phone-number');
        const seatElementText = seatElement.value;
        const seatElementSplit=seatElementText.split('')
       const len=seatElementSplit.length;
    //    console.log(len)
       if(count>0 && !isNaN(seatElementText)){
        const nextBtn=document.getElementById('next-btn');
        nextBtn.removeAttribute('disabled')
       }

     const totalCostElement=document.getElementById('totalCost');
     const totalCostElementText=totalCostElement.innerText;
       const totalcost=(totalSeatNUmber*550);
       totalCostElement.innerText=totalcost
       const grandTotal=document.getElementById('grand-total');
       grandTotal.innerText=totalcost;
        
      }
      else{
        alert('You can not buy more then 4 ticket')
      }
      ticket++;
    }, { once: true })
}

//if the copuppon is valid the add the event to the apply  button


document.getElementById('apply-btn').addEventListener('click',function(){
    const copupponFieldElement=document.getElementById('cupon-field');
    const copuponSplit=copupponFieldElement.value
    // copupponFieldElement.replaceAll(/\s/g,'').toUpperCase();
     if(copuponSplit==='NEW15'){
         const grandTotal=getElemtByid('grand-total').innerText; 
        const grandTotalNumber=parseFloat(grandTotal);
        const updateGrandTotal=grandTotalNumber-(grandTotalNumber*0.15);
        console.log(updateGrandTotal);
       getElemtByid('grand-total').innerText=updateGrandTotal;
       hiddenSection('apply-btn')
       hiddenSection('cupon-field')
     }
     else if(copuponSplit==='Couple 20'){
        const grandTotal=getElemtByid('grand-total').innerText;
        const grandTotalNumber=parseFloat(grandTotal);
        const updateGrandTotal=grandTotalNumber-(grandTotalNumber*0.20);
        console.log(updateGrandTotal);
       getElemtByid('grand-total').innerText=updateGrandTotal;
       hiddenSection('apply-btn')
       hiddenSection('cupon-field')
     }
  
},{once:true})


//add disabled attribute so that the user cannot select more then 4 ticket

const totalSeat=document.getElementById('totalBookedSeat').innerText;
const totalSeatNumber=parseInt(totalSeat);

//oper modal

const nextBtn=document.getElementById('next-btn');
nextBtn.addEventListener('click',function(){
   hiddenSection('main');
   hiddenSection('footer');
   removeHidden('modal')
})

document.getElementById('modal-btn').addEventListener('click',function(){
    hiddenSection('modal');
    removeHidden('main')
    removeHidden('footer')
})