var playlist = {
 dj1: "master",
 dj2: "amateur",
 dj3: "professional"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
