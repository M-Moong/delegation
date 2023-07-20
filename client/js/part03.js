const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];









const swiper = new Swiper(".swiper", {
  autoplay: {
    disableOnInteraction: false,
  },
  loop: true,
  speed: 2000,
  parallax: true,
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return /* html */ `
        <span class="${className}">
          <img src="./assets/part01/${data[index].src}" alt="" />
        </span>
      `;
    },
  },
});

const title = document.querySelector('h3');



swiper.on('slideChange', function (e) {
  // console.log(e.realIndex);
  title.classList.remove("is-active");
}).on('slideChangeTransitionEnd', function(e){
  // console.log('슬라이드 애니메이션 끝 !');
  title.classList.add('is-active');
})

