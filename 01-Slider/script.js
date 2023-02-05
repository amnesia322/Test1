function Slider(element, images) {
    this.loadStatic();
    this.el = document.querySelector(element);
    this.images = images
    this.init();
}

Slider.prototype = {
    init: function () {
        this.images.map(it => {
            let newDiv = document.createElement('div')
            newDiv.classList.add('slider_item')
            let newImg = document.createElement('img')
            newImg.src = it
            newDiv.appendChild(newImg)
            this.el.appendChild(newDiv)
        })
        this.slides = document.getElementsByClassName('slider_item');
        /*this.nextBtn = this.el.querySelector('#next');*/
        /*this.prevBtn = this.el.querySelector('#prev');*/
        this.nextBtn = document.createElement('a')
        this.nextBtn.classList.add('slider_next')
        this.nextBtn.textContent = 'next';
        this.prevBtn = document.createElement('a')
        this.prevBtn.classList.add('slider_previous')
        this.prevBtn.textContent = `prev`;
        this.el.appendChild(this.nextBtn)
        this.el.appendChild(this.prevBtn)

        this.slideIndex = 1;
        this.navigate();
    },
    navigate: function () {

        const self = this;

        self.nextBtn.addEventListener('click', function (e) {
            self.showSlides(self.slideIndex += 1);
        });

        self.prevBtn.addEventListener('click', function (e) {
            self.showSlides(self.slideIndex -= 1)
        });

    },
    showSlides: function (n) {
        const self = this;


        if (n > self.slides.length) {
            self.slideIndex = 1
        }
        if (n < 1) {
            self.slideIndex = self.slides.length
        }

        for (let slide of self.slides) {
            slide.style.display = "none";
        }
        self.slides[self.slideIndex - 1].style.display = "block";
    },


    loadStatic: function () {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles.css';
        document.head.appendChild(link);

    }
};

document.addEventListener("DOMContentLoaded", function () {
    const aSlider = new Slider("#slider", ["https://media.tproger.ru/uploads/2020/07/rose.jpg",
        "https://media.tproger.ru/uploads/2020/07/leaf.jpg",
        "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg"]);

});

