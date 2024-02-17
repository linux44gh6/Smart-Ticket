const scrollbtn=document.getElementById('scrollButton');
const targetSection=document.getElementById('targetSection');
scrollbtn.addEventListener('click',function(){
    targetSection.scrollIntoView({behavior:'smooth'})
})

// add evet to the  seat btn;
const btns=document.querySelectorAll('.btn1');
for(const btn of btns){
    btn.addEventListener("click",function(){
      const btnID=btn.innerText;
     addBacgourdColor(btnID);
     const element=getElemtByid('seat-booked');
    appendChildToElement('seat-booked',btnID)
     const seatClass=getElemtByid('seat-class');
    appendChildToElement('seat-class',"Economic")

    const seatPrice=getElemtByid('seat-price');
    appendChildToElement('seat-price','550')

   let nmb= getTotalBookedSet('totalBookedSeat');
   console.log(nmb)
    })
}