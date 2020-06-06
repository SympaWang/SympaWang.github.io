const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Euterpe',
            artist: 'EGOIST',
            url: 'https://music.163.com/outchain/player?type=2&id=722932&auto=1&height=66',
            cover: 'cover1.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});