var playlist = { song : '24k'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
