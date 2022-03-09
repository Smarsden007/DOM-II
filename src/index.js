import './less/index.less'

// Your code goes here!

//Load Event
window.onload = function (evt){
    console.log(`event ${evt.type}`)
    const heading = document.querySelector('h1')
    heading.textContent = 'REDADDDED'


    //add event listener copy


    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    // 3 click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    //4dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })

//5 keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = 'HELLO THERE FRIEND'
    }
})

//6 Mousemove
document.body.addEventListener('mousemove', evt =>{
    const { clientX, clientY} = evt
})

//7 Mouseenter
//8 Mouseleave

const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500)
    })
}


}

