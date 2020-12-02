// Your code goes here

const navLinks =document.querySelectorAll(".nav a")
const para = document.querySelectorAll ('p')
const textbody = document.querySelectorAll('body')
const mainNav = document.querySelector('.intro h2')

window.addEventListener ('load', () =>{
    alert ('page is fully loaded now')
})

window.addEventListener ('scroll', (e) => {
    const axis = window.scrollY;

    if (axis > 300){
        document.querySelectorAll('p').forEach((p) => {
            p.style.fontSize = "10rem"
        });
    } else {
        document.querySelectorAll('p').forEach((p) => {
            p.style.fontSize = 'inherit';
    });
}
});

window.addEventListener ('copy', (e)=> {
    alert ('nice try buddy');
})



window.addEventListener ('keydown', (e) => {
 document.querySelector('.logo-heading').style.fontSize = '150rem'
 
})

window.addEventListener ('keyup', (e) => {
    document.querySelector('.logo-heading').style.fontSize = '8rem'
    
   })


window.addEventListener ('dblclick', (e)=>{
    document.querySelector('body').style.background = 'red'
})

window.addEventListener ('click', (e)=>{
    document.querySelector('body').style.background = 'inherit'
})

window.addEventListener ('contextmenu', () =>{
    alert ('SO MANY TOOLS')
})

// window.addEventListener ('mouseover', () => {
//     document.querySelector('.intro h2').style.color = 'green' ;
// })

// window.addEventListener ('mouseout', () => {
//     document.querySelector('.intro h2').style.color = 'black' ;
// })

mainNav.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green'
})

mainNav.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black'
})