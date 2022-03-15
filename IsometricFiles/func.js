const atk = document.getElementsByClassName('box_single')
const target = document.getElementsByClassName('animate_one')

for(let i=0; i < atk.length; i++){
    atk[i].addEventListener('mouseenter', function(){
        setTimeout(function(){
         target[0].style.transform = 'rotate(0deg) skew(0deg)';
 
         atk[0].style.transform = 'translate(-300px)'
         atk[1].style.transform = 'translate(0px)'
         atk[2].style.transform = 'translate(300px)'  
        })  
     })

    atk[i].addEventListener('mouseleave', function(){
        setTimeout(function(){
          target[0].style.transform = 'rotate(25deg) skew(-25deg)';
  
          atk[0].style.transform = 'translate(-100px, -100px)'
          atk[1].style.transform = 'translate(-50px, -50px)'
          atk[2].style.transform = 'translate(0px, -0px)'
        })
      })

}