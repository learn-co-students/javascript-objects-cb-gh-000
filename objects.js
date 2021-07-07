var playlist = new Object({ Swift: "Lover" })

function updatePlaylist(obj, key, value) {
  return Object.assign(obj, { [key]: value })
}

function removeFromPlaylist (playlist, artistName) {
	delete playlist[artistName]
	console.log(playlist);
}
