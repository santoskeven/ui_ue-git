const cont = document.getElementsByClassName('target')
const target = document.querySelectorAll('.Move_C')

console.log(cont)

    for(let i = 0; i < cont.length; i++){
        cont[i].addEventListener('mousemove', function(e){

            CapMove(e)
        
        })
    }


function CapMove(e){
 
 for(let i = 0; i < target.length; i++){

    let x = (target[i].getBoundingClientRect().left) + target[i].clientWidth / 2;
    let y = (target[i].getBoundingClientRect().top) + target[i].clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) - 125;
    
    target[i].style.transform = "rotate("+ rot + "deg)";

}

}


// const head = document.getElementsByClassName('heir')
// const mouth = document.getElementsByClassName('mouth')

//  for(let i = 0; i < head.length; i++){

//     head[i].addEventListener('mouseenter', function(){
//         mouth[i].style.borderBottomLeftRadius = '1rem';
//         mouth[i].style.borderBottomRightRadius = '1rem';
//         mouth[i].style.height = '1.3rem';
//     })
    
//     head[i].addEventListener('mouseleave', function(){
//         mouth[i].style.borderBottomLeftRadius = '8rem';
//         mouth[i].style.borderBottomRightRadius = '8rem';
//         mouth[i].style.height = '1.5rem';
//     })

//  }