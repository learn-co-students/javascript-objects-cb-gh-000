var playlist = {artist:"hello"}

function updatePlaylist(playlist,name,title){
  return playlist[name]=title;
}
function removeFromPlaylist(playlist,artistName){
    delete playlist[artistName];
    return playlist;
}
