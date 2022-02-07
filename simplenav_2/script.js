const link =  document.querySelectorAll('.link')
const linkS = document.querySelectorAll('.link-s')
const social = document.querySelector('.social')

link.forEach((link)=>{
    link.addEventListener('mouseover',()=>{
        link.style.transition = '.5s ease-in'
        link.style.color = 'black'
        link.style.textAlign = 'right'
        link.style.paddingRight = '2rem'
    })
    link.addEventListener('mouseout',()=>{
        link.style.background = ''
        link.style.color = 'white'
        link.style.textAlign = ''
        link.style.paddingRight = ''
    })
})
linkS.forEach((linkS)=>{
    linkS.addEventListener('mouseover',()=>{
        linkS.style.transition = '1s'
        linkS.style.color = 'black'
    })
    linkS.addEventListener('mouseout',()=>{
        linkS.style.color = ''
    })
})
