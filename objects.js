var playlist  = {
  'Eminem': 'Not Afraid'
};

function updatePlaylist(playlist, artistname, songTitle) {
  playlist[artistname] = songTitle;
  return;


}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return;
}
