let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelectorAll('.about .image-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let photos = btn.getAttribute('src');
        document.querySelector('.about .image-container .image').src = photos;
    }
})