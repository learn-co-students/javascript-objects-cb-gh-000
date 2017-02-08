playlist = {
  Kanye West: 'Ultralight Beam',
  Jay z: 'New York',
  Drake: 'Both'
}

function updatePlaylist(obj,key,value ) {
  Object.assign({},obj , {key : [value]});
  return playlist;
}
