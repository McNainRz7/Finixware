var counter = 1;
    var intervalId;
  
    function startTimer() {
      intervalId = setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4){
          counter = 1;
        }
      }, 5000);
    }
  
    startTimer(); 
  
  
    var manualBtns = document.querySelectorAll('.manual-btn');
    manualBtns.forEach(function(btn, index) {
      btn.addEventListener('click', function() {
        clearInterval(intervalId); 
        counter = index + 1; 
        startTimer(); 
      });
    });