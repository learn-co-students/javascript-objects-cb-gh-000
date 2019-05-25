var playlist = {trivium: "To the rats"}
function updatePlaylist(object, artist, song){
  return object[artist]= song;
}
function removeFromPlaylist(obj, artist){
  delete obj[artist];
  return obj;
}
