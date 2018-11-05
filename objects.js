var playlist = Object.assign({}, {'kk':'tum mile', 'sonu nigam': 'sapna jahan'});

 function updatePlaylist(object, artist, song){
   object.artist = song;
   return object;
 }

 function removeFromPlaylist(playlist, artist){
   delete playlist.artist;
   return playlist;
 }
 