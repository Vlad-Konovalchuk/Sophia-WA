export function slideShow(rootEl) {
    // let slides;
    // let pagers;
    // let activeIndexEl=0;
    //
    // function wrapSlides () {
    //     const slidesWrapper = document.createElement('div');
    //     slidesWrapper.classList.add('slideShow__slides');
    //     slides = Array.from(element.children).map((slideContent, i)=>{
    //       const slide = document.createElement('div');
    //       slide.classList.add('slideShow__slide');
    //       if (i===activeIndexEl){
    //           slide.classList.add('active');
    //       }
    //       slide.appendChild(slideContent.cloneNode(true));
    //       slidesWrapper.appendChild(slide);
    //        return slide;
    //     });
    //     element.innerHTML = '';
    //     element.appendChild(slidesWrapper);
    // }
    //
    // function renderPager () {
    //     const pager = document.createElement('ul');
    //     pager.classList.add('slideShow__pager');
    //
    //     pagers = slides.map( (el, i) => {
    //         const pagerItem = document.createElement('li');
    //         pagerItem.classList.add('slideShow__pager-item');
    //         if (i===activeIndexEl){
    //             pagerItem.classList.add('active');
    //         }
    //         pagerItem.addEventListener('click', ()=>{
    //             deactivateSlide();
    //             cnahgeActiveSlideIndex(i);
    //             activateSlides();
    //         });
    //
    //         pager.appendChild(pagerItem);
    //
    //
    //         return pagerItem;
    //     });
    //     element.appendChild(pager)
    // }
    //
    // function deactivateSlide() {
    //     slides[activeIndexEl].classList.remove('active');
    //     pagers[activeIndexEl].classList.remove('active');
    // }
    //
    // function cnahgeActiveSlideIndex(index) {
    //     activeIndexEl = index;
    // }
    //
    // function activateSlides() {
    //     slides[activeIndexEl].classList.add('active');
    //     pager[activeIndexEl].classList.add('active');
    // }
    //
    // function render() {
    //     wrapSlides();
    //     renderPager();
    //     element.classList.add('slideShow');
    // }
    //
    // render();

    const slides = rootEl.document.querySelector('.slideShow__slides');
    const slideItem = slides.documet.querySelectorAll('slideShow__slide');
    console.log(slideItem);
}


// slideShow(
//     document.querySelector('#slideShow')
// );