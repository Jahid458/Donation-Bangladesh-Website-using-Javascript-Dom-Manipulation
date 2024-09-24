window.addEventListener('scroll',function(){
   const navabar = document.getElementById('navbar');
   if(window.scrollY > 10){
    navabar.classList.remove('bg-[#F9F7F3]')
   }else{
    navabar.classList.add('bg-[#F9F7F3]')
   }
})


// ---------------- Modal Call ------------------------
const confirmModal = document.getElementById("Donation_Modal");

//---------------- Noakhali Donation Card ------------------ 
const calculateNoakhali= document.getElementById('noakhali');
calculateNoakhali.addEventListener('click', function(){
  const donationAmount1 = inputGetById("noakhaliDonation");
  console.log(donationAmount1);
  const balanceAmount = innerTextById("balance-amount");
  const totalDonateGiven1 = totalDonate('total-donate1');
   const donateTitle1 = document.getElementById('donate-title1').innerText;

   //------------ Alert for Insufficient balance ---------------
      if(balanceAmount < donationAmount1){
        return alert("Insuffcient Balance");
        
      }

      if(isNaN(donationAmount1) || donationAmount1 <= 0){
        return alert('Please Enter Validate Number')
      }
      
      else
      {  
        totalDonate1 = donationAmount1 + totalDonateGiven1
        document.getElementById('total-donate1').innerText = totalDonate1.toFixed(2); 
        totalBalance = balanceAmount - donationAmount1 ; 
        document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);
        // ------------------ Show Modal --------------------
        confirmModal.showModal();
        //------------------ history sections ---------------
        addhistory(donationAmount1,donateTitle1);

      }
})

//---------------- Feni Donation------------------
const calculateFeni = document.getElementById('feni');

calculateFeni.addEventListener("click", function(){
  const donationAmount2 = inputGetById("feniDonation");
  const balanceAmount = innerTextById("balance-amount");
  const totalDonateGiven2 = totalDonate('total-donate2');
  const donateTitle2 = document.getElementById('donate-title2').innerText;
  console.log(donateTitle2);
  //----------------- Alert for Insufficient balance --------------
  if(balanceAmount < donationAmount2){
    return alert("Insuffcient Balance")
    }

  if(isNaN(donationAmount2) || donationAmount2 <= 0){
    return alert('Please Enter Validate Number')
  }
  else
     {
        totalDonate2 = donationAmount2 + totalDonateGiven2;
        document.getElementById('total-donate2').innerText = totalDonate2.toFixed(2); 
        totalBalance = balanceAmount - donationAmount2 ; 
        document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);
        confirmModal.showModal();
        // -------------- history sections -------------------------
        addhistory(donationAmount2,donateTitle2);
     }
  })



//---------------- Quota Movement Donation------------------
const calculateQuota = document.getElementById('quota');

calculateQuota.addEventListener("click", function(){
  const donationAmount3 = inputGetById('quotaDonation');
  const balanceAmount = innerTextById("balance-amount");
  const totalDonateGiven3 = totalDonate('total-donate3');
  const donateTitle3 = document.getElementById('donate-title3').innerText;
  //----------------- Alert for Insufficient balance -------------------
  if(balanceAmount < donationAmount3){
    return alert("Insuffcient Balance")
    }

  if(isNaN(donationAmount3) || donationAmount3 <= 0){
    return alert('Please Enter Validate Number')
  }
  
  else{
    totalDonate3 = donationAmount3 + totalDonateGiven3;
      document.getElementById('total-donate3').innerText = totalDonate3.toFixed(2); 
      totalBalance = balanceAmount - donationAmount3 ; 
      document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);
      //------------- Modal Show --------------------------------
      confirmModal.showModal();
     //----------------- history sections --------------------
       addhistory(donationAmount3,donateTitle3);
  }
})


// -------------------- Toggle HistoryTab functionality ---------------------
    const historyTab = document.getElementById('history-btn');
    const donationTab = document.getElementById('donation-btn');
  historyTab.addEventListener("click", function(){
      historyTab.classList.add('bg-[#B4F461]', 'border-none','text-black');
      historyTab.classList.remove('text-gray-600')
      donationTab.classList.remove('bg-[#B4F461]', 'border-none','text-black');
      donationTab.classList.add('text-gray-600');

      document.getElementById('donation-box').classList.add('hidden')
      document.getElementById('history-title').classList.remove('hidden');
      document.getElementById('history-section').classList.remove('hidden');
   });

//------------- Toggle DonationTab functionality --------------------------
donationTab.addEventListener("click", function(){
  donationTab.classList.add('bg-[#B4F461]', 'border-none','text-black');
  donationTab.classList.remove('text-gray-600')
  historyTab.classList.remove('bg-[#B4F461]', 'border-none','text-black');
  historyTab.classList.add('text-gray-600');

  document.getElementById('donation-box').classList.remove('hidden');
  document.getElementById('history-title').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');

})