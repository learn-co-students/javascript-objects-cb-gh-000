var playlist = {BigShaq: "Mans not hot"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;

}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
