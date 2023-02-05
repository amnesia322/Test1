const randomWrapper = document.querySelector('.randomWrapper')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const elCount = getRandomIntInclusive(10, 100)

for (let i = 0; i <= elCount; i++) {
    const newElement = document.createElement('div')
    newElement.classList.add('random_item')
    newElement.style.backgroundColor = `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`;
    randomWrapper.append(newElement)
}