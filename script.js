const section4 = document.querySelector('.section-4');

const section4left1 = document.querySelector('.section-4-left-1');
const section4left2 = document.querySelector('.section-4-left-2');
const section4left3 = document.querySelector('.section-4-left-3');
const section4left4 = document.querySelector('.section-4-left-4');

const section4RightImg = document.querySelector('.section-4-right-img');

const section4RightImage1 = "https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png";
const section4RightImage2 = "https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png";
const section4RightImage3 = "https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png";
const section4RightImage4 = "https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png";



window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const section4OffsetTop = section4.OffsetTop;
    const section4Height = section4.clientHeight;

    if((scrollPosition > section4OffsetTop) && (scrollPosition < section4Height + section4OffsetTop )) {

        if(scrollPosition > section4OffsetTop && scrollPosition < section4OffsetTop + 300) {
            section4left1.style.opacity = 1;
            section4left1.style.transition = "opacity 1s ease-in-out";
 
        } else if (scrollPosition > section4OffsetTop + innerHeight && scrollPosition < section4OffsetTop + innerHeight + 300){
            section4left2.style.opacity = 1;
            section4left2.style.transition = "opacity 1s ease-in-out";
 
        } else if (scrollPosition > section4OffsetTop + innerHeight * 2 && scrollPosition < section4OffsetTop + innerHeight * 2 + 300){
            section4left3.style.opacity = 1;
            section4left3.style.transition = "opacity 1s ease-in-out";
        } else if (scrollPosition > section4OffsetTop + innerHeight * 3 && scrollPosition < section4OffsetTop + innerHeight * 3+ 300){
        section4left4.style.opacity = 1;
        section4left4.style.transition = "opacity 1s ease-in-out";
        }else{
            section4left1.style.opacity = 0;
            section4left2.style.opacity = 0;
            section4left3.style.opacity = 0;
            section4left4.style.opacity = 0;
        }

        if(scrollPosition > section4OffsetTop && scrollPosition < section4OffsetTop + innerHeight){
            section4RightImg.src = section4RightImage1;
            section4RightImg.style.transition = "opacity 1s ease-in-out";
        }else if(scrollPosition > section4OffsetTop + innerHeight && scrollPosition < section4OffsetTop + innerHeight){
            section4RightImg.src = section4RightImage2;
            section4RightImg.style.transition = "opacity 1s ease-in-out";
        }else if(scrollPosition > section4OffsetTop + innerHeight *2 && scrollPosition < section4OffsetTop + innerHeight * 2){
            section4RightImg.src = section4RightImage3;
            section4RightImg.style.transition = "opacity 1s ease-in-out";
        }else if(scrollPosition > section4OffsetTop + innerHeight * 3 && scrollPosition < section4OffsetTop + innerHeight * 3){
            section4RightImg.src = section4RightImage4;
            section4RightImg.style.transition = "opacity 1s ease-in-out";
        }else{
            section4RightImg.src = section4RightImage1;
        }
    }
})