var playlist={'John Butler':'Ocean'}
function updatePlaylist(playlist,artistName,songTitle){
  return Object.assign(playlist,{[artistName]:songTitle})
}
function removeFromPlaylist(playlist,artistName){
  console.log(playlist)
  console.log('delete playlist.artistName')
  delete playlist[artistName]
  console.log(playlist)
  return playlist
}
