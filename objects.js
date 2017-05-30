
let playlist = { 'Michael': 'Jelly Beans'}

function updatePlaylist (playlist, artistName, songTitle) {
  // Modify object.
  playlist[artistName] = songTitle
  return playlist

  // Copies and modify the copy. (not intended for this lab)
  // return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  // Modify object.
  delete playlist[artistName]
  return playlist

  // Copies and modify the copy. (not intended for this lab)
  // let newPlaylist = Object.assign({}, playlist)
  // delete newPlaylist[artistName]
  // return newPlaylist
}
