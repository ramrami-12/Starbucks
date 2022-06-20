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
window.addEventListener('scroll', _.throttle(function(){
    console.log('scroll');
    if (window.scrollY > 500){
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
}) , 300);
