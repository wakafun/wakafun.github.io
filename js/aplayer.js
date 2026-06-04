var ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  audio: [{
    name: '我记得你眼里的依恋',
    artist: '群声',
    url: '/music/1.mp3',
    cover: ''
  }]
});
ap.init();