const target = document.getElementsByClassName('btn')

target[0].addEventListener('mousemove', function(e){
    
    let x = e.pageX - target[0].offsetLeft
    let y = e.pageY - target[0].offsetTop

    target[0].style.setProperty('--x', x + 'px')
    target[0].style.setProperty('--y', y + 'px')
})

target[1].addEventListener('mousemove', function(e){
    let x = e.pageX - target[1].offsetLeft
    let y = e.pageY - target[1].offsetTop

    target[1].style.setProperty('--x', x + 'px')
    target[1].style.setProperty('--y', y + 'px')
})