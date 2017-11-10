var playlist = {
    bim: 'yo'
};

var updatePlaylist = (playlist, artistName, songTitle) => {
    playlist[artistName] = songTitle;
    return playlist;
}

var removeFromPlaylist = (playlist, artist) => {
    delete playlist[artist];
    return playlist;
}
