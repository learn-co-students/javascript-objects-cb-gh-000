 var playlist = {Lorde : "Team"};

function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
   delete playlist[artistName];
}
