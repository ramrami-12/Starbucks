# ☕️ STARBUCKS
#### starbucks 홈페이지 예제

* [fastcampus](https://fastcampus.co.kr/) 한 번에 끝내는 프론트엔드 개발 초격차 패키지 Online 강의를 들으면서 작성한 내용입니다!

[참고 및 원본 링크](https://github.com/ParkYoungWoong/starbucks-vanilla-app)

[내 깃헙](https://github.com/ramrami-12/Starbucks.git)


[실제 starbucks 홈페이지🤣](https://www.starbucks.co.kr/index.do)

- errors
    
    Cannot read properties of null (reading 'querySelector')
    
    - script tag를 header가 아닌 body 가장 아래로 내리기
    - 또는 script 연동할 때 tag에 defer 속성 넣어주기
    

### html
- 오픈 그래프: 사이트가 공유될 때 보여지는 정보
    -  페이지의 설명이 길어지면 악성 사이트로 판단 될 수 있음

- BEM(Block Element Modifier)
    - `요소__일부분`
    - `요소-상태`

- position이 absolute 이거나 fixed이면 가로 넓이가 최소화가 되려고 한다

`<a href="javascript:void(0)" class="btn">자세히 보기</a>`
: 이런 식으로 href에 javascript:void(0) 작성시 아무런 기능 없는 링크를 만들 수 있다.

### css
몰랐던 tag들 정리

```css
.ex {
	/* 비율을 설정해서 전체 화면에서 비율만큼 늘림 이렇게 하면 1의 비율로 늘어난다. */
	flex-grow: 1;
	/* 줄 높이 (행간) 사용하는 글꼴에 따라서 최적의 line height가 다를 수 있다 */
  line-height: 1.4;
	/* content의 item들 정렬 start, center, space-between, space-around, space-evenly */
	justify-contents: start;
    /* item들이 한줄에 배치되게 할 것인지 또는 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현 할 것인지 결정하는 속성 */
    flex-wrap: wrap;
    /* inherit 부모 태그의 속성값을 상속 받음 */
    position: inherit;
    /* 대체 요소 */
    content: "";
} 
```

- script 태그의 defer 속성은 페이지가 모두 로드 된 후에 해당 스크립트가 실행됨을 나타냄

### javascript
- `'use strict'` : 엄격한 모드
- javascript의 document는 Html 자체 window는 브라우저의 창

* swipper

* youtube api

* scroll magic

* gsap
