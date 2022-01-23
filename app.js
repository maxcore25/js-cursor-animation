let mouseCursor = document.querySelector('.cursor');
let imgBlock = document.querySelector('.front-cover');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('mousemove', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
});

imgBlock.addEventListener('mousemove', () => {
  mouseCursor.classList.add('img-grow');
});
imgBlock.addEventListener('mouseleave', () => {
  mouseCursor.classList.remove('img-grow');
});
