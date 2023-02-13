/* ========== Navigation =========== */
const navList =document.querySelector('.nav-list');
const open =document.querySelector('.open');
const close =document.querySelector('.close');
/*=======eventListener for menu======*/
open.addEventListener('click',()=>{
  navList.classList.remove('display-hidden');
})
/*========eventlistener for close ========*/
close.addEventListener('click',()=>{
    navList.classList.add('display-hidden');
})
/* ========== User Form =========== */
