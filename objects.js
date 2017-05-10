var playlist = {
  artist1: 'song1',
  artisi2: 'song2'
};

function updatePlaylist(obj, aName, sName) {

  obj[aName] = sName;

  return obj;
  
}

function removeFromPlaylist(obj, aName) {

  delete obj[aName];

  return obj;
  
}