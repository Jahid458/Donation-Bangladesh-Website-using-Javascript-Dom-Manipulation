
//---------------- Noakhali Donation------------------ 
const calculateNoakhali= document.getElementById('noakhali');
calculateNoakhali.addEventListener('click', function(){
  const donationAmount1 = inputGetById("noakhaliDonation");
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  const totalDonateGiven1 = parseFloat(document.getElementById('total-donate1').innerText);
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
})

//---------------- Feni Donation------------------
const calculateFeni = document.getElementById('feni');
calculateFeni.addEventListener("click", function(){
  const donationAmount2 = inputGetById("feniDonation");
  console.log(donationAmount2);
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  //total-donate2
  const totalDonateGiven2 = parseFloat(document.getElementById('total-donate2').innerText);
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
})
//---------------- Quota MOvement Donation------------------
const calculateQuota = document.getElementById('quota');
calculateQuota.addEventListener("click", function(){
  const donationAmount3 = inputGetById('quotaDonation');
  console.log(donationAmount3);
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  const totalDonateGiven3 = parseFloat(document.getElementById('total-donate3').innerText);

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

})
