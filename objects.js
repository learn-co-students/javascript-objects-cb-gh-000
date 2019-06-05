var playlist = new Object({artist: 'song'});

function updatePlaylist(playlistName, artistName, songTitle) {
  playlistName.artistName = songTitle;
  return playlistName;
}

function removeFromPlaylist(playlistName, artistName) {
  delete playlistName.artistname;
  return playlistName;
}
