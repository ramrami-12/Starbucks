'use strict'

const searchEl = document.querySelector('.search');
console.log(searchEl);
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// throttle -> scroll 할 때 함수가 무한대로 호출하는 것 방지 milliseconds 단위로 시간 추가
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        });
    } else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });
    }
}), 300);

// promotion 순서대로 나타나는 기능
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})

// Swiper 슬라이드 요소 관리
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
        delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
        prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
        nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
})

// promotion 토글 
const promEl = document.querySelector('.promotion')
const promToggleBtn = document.querySelector('.toggle-promotion')
let isHideProm = false
promToggleBtn.addEventListener('click', function () {
    isHideProm = !isHideProm
    if (isHideProm) {
        promEl.classList.add('hide')
    } else {
        promEl.classList.remove('hide')
    }
})

// 떠다니는 동그라미들 떠다니게 하기
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(
        selector, 
        random(1.5, 2.5), {
            delay: random(0, delay),
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section .scroll-spy')
spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})