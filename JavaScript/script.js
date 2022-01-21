let brick = document.querySelector(".bar")
let responsive = document.querySelector(".resp_holder")
let bdcontainer = document.querySelector(".bodycontainer")


brick.addEventListener('click', () => {

    responsive.style.display = 'flex';

})
brick.addEventListener('click', () => {


    bdcontainer.style.display = 'none';

})

let homeclick = document.querySelector(".activeli")

homeclick.addEventListener('click', () => {
    responsive.style.display = 'none';
})
homeclick.addEventListener('click', () => {
    bdcontainer.style.display = 'block';
})



let noactive = document.querySelector(".noactiveli")