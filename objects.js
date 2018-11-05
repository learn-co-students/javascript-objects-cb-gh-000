var playlist = Object.assign({}, {'random': 'random song'});

 function updatePlaylist(object, artist, song){
   object[artist] = song;
   return object;
 }

 function removeFromPlaylist(playlist, artist){
   delete playlist[artist];
   return playlist;
 }
