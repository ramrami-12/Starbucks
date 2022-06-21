var tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"

var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// onYouTubePlayerAPIReady() 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 
// 변경하면 안됨!
function onYouTubePlayerAPIReady() {
    // 실제 youtube 링크 https://www.youtube.com/watch?v=An6LvWQuj_8
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true, // 자동재생
            loop: true, // 반복재생
            playlist: 'An6LvWQuj_8'
        },
        events: {
            onReady: function(event) {
                event.target.mute()
            }
        }
    })
}