var playlist = {"Cool Alyx": "Funky Town"}

function updatePlaylist(obj, artistName, songTitle) {
    return obj[artistName] = songTitle;
}

function removeFromPlaylist(obj, artistName) {
    delete obj[artistName]
    return obj
}
