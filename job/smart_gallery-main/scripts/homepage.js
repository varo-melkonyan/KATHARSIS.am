let iframesLoaded = 0;
let data = {};

let timer = null;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let onLoad = async () =>
{
    let _uid = parser.getUid();

    if (_uid)
    {
        data = await parser.dataFetch(_uid);
        data = data.data.data;

        for (let i = 0; i < data.images.length; i++)
        {
            let image = data.images[i];
            view.addIframe(i, data.images.length, data.uuid, image.iuid);
        }
    }
    else
    {
        console.log("uuid not found");
    }
    
    let swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        simulateTouch: false,
        mousewheel: {
            invert: false,
            eventsTarget: '.blog-slider'
        },
        pagination: {
            el: '.blog-slider__pagination',
            clickable: true,
        }
    });
}

function iframeLoaded()
{
    iframesLoaded++;

    if (iframesLoaded == data.images.length)
    {
        loader.toggle();
    }
}

$(onLoad)