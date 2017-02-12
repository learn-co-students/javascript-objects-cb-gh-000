var playlist = {'Bruno Mars': '24K Magic', 'Eminem': 'Rap God'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}