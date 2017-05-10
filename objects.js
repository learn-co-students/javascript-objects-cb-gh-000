var playlist = {};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song});
}

function removeFromPlaylist(playlist, artist) {
    out = Object.assign({}, playlist);
    delete out[artist];
    return out;
}
