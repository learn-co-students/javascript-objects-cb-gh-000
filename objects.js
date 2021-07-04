var playlist = new Object({hah: "FUCKYOU"});

function updatePlaylist(haha,artistName,songTitle) {
    haha[artistName] = songTitle;
    return haha;
}

function removeFromPlaylist(haha,artistName) {
  delete haha[artistName];
  return haha;
}
