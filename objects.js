var playlist = {'Phil Ochs': 'song'}
function updatePlaylist(playist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
