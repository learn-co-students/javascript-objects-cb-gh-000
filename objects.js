let playlist = {
  J: 'Z',
  AB: 'BA',
  LO: 'L'
};

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist;
}
