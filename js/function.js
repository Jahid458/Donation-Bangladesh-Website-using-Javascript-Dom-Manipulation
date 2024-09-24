//history function created
function addhistory(amount, title){
  const history = document.createElement('div');
  history.className = "bg-white p-5 rounded-lg border-2 border-gray-400 mb-8 shadow-2xl";
  history.innerHTML =
   `
   <p class='text-lg text-gray-700 font-bold'><span>${amount} Taka is Donated for ${title} </span></p>
   <p class='text-xl text-gray-700 rounded-md'> Date: ${new Date()}</p>
   `
   const historyContainer = document.getElementById('history-section');
  document.getElementById('history-section').insertBefore(history,historyContainer.firstChild)
}
// input get functions
function  inputGetById(id){
  const inputGetValue = parseFloat(document.getElementById(id).value);
  return inputGetValue
}
//balance-amount
function innerTextById(id){
  return parseFloat(document.getElementById(id).innerText).toFixed(2);
}
//total donation Input values
function totalDonate(id){
  return parseFloat(document.getElementById(id).innerText)
}