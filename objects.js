var playlist={noah:"terbang"};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
}

function removeFromPlaylist(playlist,artistName){
  playlist.assign({artistName})
}
