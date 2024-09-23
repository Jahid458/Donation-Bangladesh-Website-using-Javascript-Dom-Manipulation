
//Donate Noakhali 
const calculateNoakhali= document.getElementById('noakhali');
calculateNoakhali.addEventListener('click', function(){
  const donationAmount1 = inputGetById("noakhaliDonation");
  console.log( donationAmount1) ;
  const balanceAmount = parseFloat(document.getElementById("balance-amount").innerText).toFixed(2);
  const totalDonateGiven = parseFloat(document.getElementById('total-donate').innerText);
     totalDonate1 = donationAmount1 + totalDonateGiven
     document.getElementById('total-donate').innerText = totalDonate1.toFixed(2); 
    //Alert for Insufficient balance
    if(balanceAmount < donationAmount1){
        return alert("Insuffcient Balance")
    }

    if(isNaN(donationAmount1) || donationAmount1 <= 0){
      return alert('Please Enter Validate Number')
    }

    totalBalance = balanceAmount - donationAmount1 ; 
    document.getElementById("balance-amount").innerText = totalBalance.toFixed(2);
})