Object.assign({},playlist,{'nirava':'smelsl'});

function updatePlaylist(playList, artistName, songTitle){

  return Object.assign({},playList,{[artistName]:songTitle});

}


function removeFromPlaylist(playList, artistName){
  return( delete playList[artistName]);
}
