var playlist = {theKillers: "Mr.Brightside"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
}