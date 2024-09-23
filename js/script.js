
//---------------- Noakhali Donation------------------ 
const calculateNoakhali= document.getElementById('noakhali');
calculateNoakhali.addEventListener('click', function(){
  const donationAmount1 = inputGetById("noakhaliDonation");
  console.log(donationAmount1)
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  const totalDonateGiven1 = parseFloat(document.getElementById('total-donate1').innerText);
   const donateTitle1 = document.getElementById('donate-title1').innerText;
   console.log(donateTitle1);
   //Alert for Insufficient balance
      if(balanceAmount < donationAmount1){
          return alert("Insuffcient Balance")
      }

      if(isNaN(donationAmount1) || donationAmount1 <= 0){
        return alert('Please Enter Validate Number')
      }
     totalDonate1 = donationAmount1 + totalDonateGiven1
     document.getElementById('total-donate1').innerText = totalDonate1.toFixed(2); 
   

    totalBalance = balanceAmount - donationAmount1 ; 
    document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);


    //history sections 
    const history = document.createElement('div');
    history.className = "bg-white p-5 rounded-lg border-2 border-gray-400 mb-8 shadow-2xl";
    history.innerHTML =
     `
     <p class='text-lg text-gray-700'><span>${donationAmount1} Taka is Donated for ${donateTitle1} </span></p>
     <p class='text-xl text-gray-700 rounded-md'> Date: ${new Date().toUTCString()}(Bangladesh Standard Time)</p>
     `
     const historyContainer = document.getElementById('history-section');
    document.getElementById('history-section').insertBefore(history,historyContainer.firstChild)

})

//---------------- Feni Donation------------------
const calculateFeni = document.getElementById('feni');
calculateFeni.addEventListener("click", function(){
  const donationAmount2 = inputGetById("feniDonation");
  console.log(donationAmount2);
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  //total-donate2
  const totalDonateGiven2 = parseFloat(document.getElementById('total-donate2').innerText);
  const donateTitle2 = document.getElementById('donate-title2').innerText;
  console.log(donateTitle2);
  //Alert for Insufficient balance
  if(balanceAmount < donationAmount2){
    return alert("Insuffcient Balance")
    }

  if(isNaN(donationAmount2) || donationAmount2 <= 0){
    return alert('Please Enter Validate Number')
  }

    totalDonate2 = donationAmount2 + totalDonateGiven2;
    document.getElementById('total-donate2').innerText = totalDonate2.toFixed(2); 
    totalBalance = balanceAmount - donationAmount2 ; 
    document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);

        //history sections 
        const history = document.createElement('div');
        history.className = "bg-white p-5 rounded-lg border-2 border-gray-400 mb-8 shadow-2xl";
        history.innerHTML =
         `
         <p class='text-lg text-gray-700'><span>${donationAmount2} Taka is Donated for ${donateTitle2} </span></p>
         <p class='text-xl text-gray-700 rounded-md'> Date: ${new Date().toUTCString()}(Bangladesh Standard Time)</p>
         `
         const historyContainer = document.getElementById('history-section');
        document.getElementById('history-section').insertBefore(history,historyContainer.firstChild)


})
//---------------- Quota MOvement Donation------------------
const calculateQuota = document.getElementById('quota');
calculateQuota.addEventListener("click", function(){
  const donationAmount3 = inputGetById('quotaDonation');
  console.log(donationAmount3);
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  const totalDonateGiven3 = parseFloat(document.getElementById('total-donate3').innerText);

  const donateTitle3 = document.getElementById('donate-title3').innerText;
  console.log(donateTitle3);

  //Alert for Insufficient balance
  if(balanceAmount < donationAmount3){
    return alert("Insuffcient Balance")
    }

  if(isNaN(donationAmount3) || donationAmount3 <= 0){
    return alert('Please Enter Validate Number')
  }

  totalDonate3 = donationAmount3 + totalDonateGiven3;
    document.getElementById('total-donate3').innerText = totalDonate3.toFixed(2); 
    totalBalance = balanceAmount - donationAmount3 ; 
    document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);

     //history sections 
     const history = document.createElement('div');
     history.className = "bg-white p-5 rounded-lg border-2 border-gray-400 mb-8 shadow-2xl";
     history.innerHTML =
      `
      <p class='text-lg text-gray-700'><span>${donationAmount3} Taka is Donated for ${donateTitle3} </span></p>
      <p class='text-xl text-gray-700 rounded-md'> Date: ${new Date().toUTCString()}(Bangladesh Standard Time)</p>
      `
      const historyContainer = document.getElementById('history-section');
     document.getElementById('history-section').insertBefore(history,historyContainer.firstChild)

})



//Toggole tab functionality
const historyTab = document.getElementById('history-btn');
const donationTab = document.getElementById('donation-btn');
historyTab.addEventListener("click", function(){
  historyTab.classList.add('bg-[#B4F461]', 'border-none','text-black');
  historyTab.classList.remove('text-gray-600')
  donationTab.classList.remove('bg-[#B4F461]', 'border-none','text-black');
  donationTab.classList.add('text-gray-600');

  document.getElementById('donation-box').classList.add('hidden')
  document.getElementById('history-title').classList.remove('hidden');
  document.getElementById('history-section').classList.remove('hidden')
})