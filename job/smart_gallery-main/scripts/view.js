const view = {
    addIframe: (i, length, _uuid, _iuid) => {
        let wrapper =
            `<div class="blog-slider__item swiper-slide swiper-slide-next" role="group" aria-label="${i + 1} / ${length}" style="width: 800px; opacity: 0; transform: translate3d(${-800 * i}px, 0px, 0px);">
                <iframe src="module.html?_uuid=${_uuid}&_iuid=${_iuid}"></iframe>
            </div>`;
        
        let bullet = `<span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide ${i + 1}"></span>`;
    
        if (i != 0) {
            $(".blog-slider__pagination").append(bullet);
        }
        $(".swiper-wrapper").append(wrapper);
    }
}