var playlist = {"Arijit singh" : "Khamosiyan",
                  "Baadshah" : "Mercy",
                  "Honey Singh" : "Yo Yo "

            }


var updatePlaylist = (obj,name,song) =>{
  obj[name] = song
  return obj

}

var removeFromPlaylist = (obj,name) =>{
  delete obj[name]
  return obj
}
