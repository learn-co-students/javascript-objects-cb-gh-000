var playlist = {
  name: "Song"
};

function removeFromPlaylist(playlist,name,song){
  delete playlist.name;
}

function updatePlaylist(playlist,name,song){
   return Object.assign({}, playlist, { [name]: song })

}
