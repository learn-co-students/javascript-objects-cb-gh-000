var playlist = {
  Kanye: 'Ultralight Beam',
  Jay: 'New York',
  Drake: 'Both'
};

function updatePlaylist(obj,key,value ) {
  obj[key] = value;
  return obj;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
