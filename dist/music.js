const ap = new APlayer({
    container: document.getElementById('player'),
    mini: false,
    autoplay: true,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
       name: 'Waterwheel',
        artist: 'ZuJian',
        url: 'http://music.163.com/song/media/outer/url?id=28409319.mp3',
        cover: 'https://p2.music.126.net/4IxuKCkzOj3uW6to5sl29A==/109951164021533111.jpg'
        },
    ]
});