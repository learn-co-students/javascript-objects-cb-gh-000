var playlist = new Object();
playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}
