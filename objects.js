var playlist = {'Sid':'GG'};

var updatePlaylist = (playlist,artistName,songTitle) => {
  playlist[artistName]=songTitle;
  return playlist;
};

var removeFromPlaylist = (playlist,artistName) => {
    [artistName].forEach(e => delete playlist[e]);
    return playlist;
};