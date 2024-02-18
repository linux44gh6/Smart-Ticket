let count = 0;
const scrollbtn = document.getElementById('scrollButton');
const targetSection = document.getElementById('targetSection');
scrollbtn.addEventListener('click', function () {
    targetSection.scrollIntoView({ behavior: 'smooth' })
})

// add evet to the  seat btn;
const btns = document.querySelectorAll('.btn1');
for (const btn of btns) {
    btn.addEventListener("click", function () {
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
       if(count>0 && len>0){
        const nextBtn=document.getElementById('next-btn');
        nextBtn.removeAttribute('disabled')
       }

     const totalCostElement=document.getElementById('totalCost');
     const totalCostElementText=totalCostElement.innerText;
       const totalcost=(totalSeatNUmber*550);
       totalCostElement.innerText=totalcost
       const grandTotal=document.getElementById('grand-total');
       grandTotal.innerText=totalcost;
    }, { once: true })
}

//if the copuppon is valid the add the event to the apply  button

function addEventToApply(){
   const copupponFieldElement=document.getElementById('cupon-field').value;
   const copuponSplit=copupponFieldElement.split('').join('').toUpperCase();
   console.log(copuponSplit)
}
