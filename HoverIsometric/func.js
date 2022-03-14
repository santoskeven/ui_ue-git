window.onload = function(){
    var audio = document.getElementById('heartbeat')
    var target = document.querySelectorAll('a') 
   
    for(let i=0; i < target.length; i++){
       target[i].addEventListener('mouseover', function() {
           [].forEach.call(audio, function(audio) {
             // do whatever
             audio.play();
             console.log('teste')
           });
           }, false);
   
           target[i].addEventListener('mouseover', function() {
               audio.play();
           }, false);
   
           target[i].addEventListener('mouseleave', function() {
               audio.pause();
               audio.currentTime = 0;
             }, false);
           
    }
    
    console.log('teste')
}

//  target.addEventListenner('click', function(){
//      console.log('click')
//  })

