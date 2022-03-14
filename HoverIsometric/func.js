window.onload = function(){
    var audio = document.getElementById('heartbeat')
    var target = document.querySelectorAll('a') 
     var validS =  0;
   
    for(let i=0; i < target.length; i++){
           target[i].addEventListener('mouseover', function() {
             validS++          
            if(validS <= 1){audio.play()}

             
           });
   
           target[i].addEventListener('mouseleave', function() {
               validS = 0
               audio.pause();
               audio.currentTime = 0;
             });
           
    }
    

}

//  target.addEventListenner('click', function(){
//      console.log('click')
//  })

