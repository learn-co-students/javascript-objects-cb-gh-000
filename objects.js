
var playlist = {
  'shaggy': "it wasn't me"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
