var playlist = { testArtistName: 'testSongTitle' };

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign(playlist, { [artistName]: songTitle });
}