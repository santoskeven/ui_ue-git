const b_move = document.getElementsByClassName('container')
const target_m = document.getElementsByClassName('visible')

b_move[0].addEventListener('mousemove', function(e){

    let x = e.pageX - b_move[0].offsetLeft - 95
    let y = e.pageY - b_move[0].offsetTop - 90

    target_m[0].style.setProperty('--x',  x + 'px')
    target_m[0].style.setProperty('--y',  y + 'px')

})