const circle = document.querySelector('.figures_circle')
const triangle = document.querySelector('.figures_triangle')
const square = document.querySelector('.figures_square')
const rectangle = document.querySelector('.figures_rectangle')

circle.addEventListener('click', function () {
    circle.style.animation ? circle.style.animation = '' : circle.style.animation = 'heartbeat 1.5s ease-in-out infinite both';
})
triangle.addEventListener('click', function () {
    triangle.style.animation = 'rotate-center 0.6s ease-in-out both';
    setTimeout(() =>  triangle.style.animation = '', 620)
})
square.addEventListener('click', function () {
   square.style.animation = 'jello-diagonal 0.8s both';
    setTimeout(() =>  square.style.animation = '', 920)
})
rectangle.addEventListener('click', function () {
    rectangle.style.animation ? rectangle.style.animation = '' : rectangle.style.animation = 'vibrate 0.3s linear infinite both';
})
