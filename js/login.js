
// step 1 - set event handler
document.getElementById('btn-login')
  .addEventListener('click', function(event){
    // step 2 -prevent default behaviour (reloading browser)
     event.preventDefault(); // need to learn preventdefault

    // step 3 - get the phone number
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber);
     
  })

  // search on google - form submit reloading the page