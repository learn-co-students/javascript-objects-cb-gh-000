var playlist = {
  Nirvana : 'Smell'
}

var updatePlaylist = (playlist, artistName, songTitle) => {
  return Object.assign(playlist, { [artistName]: songTitle })
}

var removeFromPlaylist = (a, artistName) => {
  delete a.Slowdive
}
