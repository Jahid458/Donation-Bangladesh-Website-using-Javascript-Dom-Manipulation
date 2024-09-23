

const calculateDonation = document.getElementById('calculte');
calculateDonation.addEventListener('click', function(){
  const donationAmount = parseFloat(document.getElementById("donation").value);
  console.log( donationAmount) 

  const totalDonateGiven = parseFloat(document.getElementById('total-donate').innerText);
     totalDonate = donationAmount + totalDonateGiven
     document.getElementById('total-donate').innerText = totalDonate; 
    console.log(totalDonate)
    

    const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText);
    totalBalance = balanceAmount - donationAmount ; 
    document.getElementById("balance-amount").innerText = totalBalance
 
 
})