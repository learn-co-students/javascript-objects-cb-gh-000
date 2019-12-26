var playlist = {
  artistName: "songTitle",


};
function updatePlaylist(playlist, artistName, songTitle){
//Object.assign({}, playlist, {[artistName]: songTitle});
playlist[artistName] = songTitle;
  return playlist;
}
updatePlaylist(playlist, "SHM1", "Kekek1");
updatePlaylist(playlist, "SHM", "Kekek");


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
    return  playlist;
}
removeFromPlaylist(playlist, "SHM");
