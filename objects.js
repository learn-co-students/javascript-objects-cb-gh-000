var playlist = {"Beethoven": ["Ode To Joy", "Moonlight Sonata"], "Alphons Joseph": "Aaromale"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
