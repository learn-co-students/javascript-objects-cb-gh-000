var playlist = {artist:'title'};
var updatePlaylist=(playlist, artistName, songTitle) => playlist[artistName] = songTitle;
var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
}