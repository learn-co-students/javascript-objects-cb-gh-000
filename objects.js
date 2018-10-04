var playlist = {a1:"s1"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}