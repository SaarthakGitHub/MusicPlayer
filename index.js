let songs = [
  {
    id: 1,
    name: "Animal",
    artist: "Maroon V",
    genre: "rock",
    image: "assets/SongsDisplay/animal.jpg",
    source: "assets/Songs/Maroon-5(PaglaSongs).mp3",
  },
  {
    id: 2,
    name: "Faded",
    artist: "Alan Walker",
    genre: "pop",
    image: "assets/SongsDisplay/faded.jpg",
    source: "assets/Songs/Faded(PaglaSongs) (1).mp3",
  },
  {
    id: 3,
    name: "I Dont Wanna Live Forever",
    artist: "Z",
    genre: "hiphop",
    image: "assets/SongsDisplay/idontwannaliveforever.jpg",
    source:
      "assets/Songs/I Dont Wanna Live Forever - ZAYN, Taylor Swift(PagalWorld) (1).mp3",
  },
  {
    id: 4,
    name: "Let Me Love You",
    artist: "Justin",
    genre: "rock",
    image: "assets/SongsDisplay/letmeloveyou.jpg",
    source: "assets/Songs/Let-Me-Love-You(PaglaSongs).mp3",
  },
  {
    id: 5,
    name: "Old Town Road",
    artist: "Lil Nas X",
    genre: "pop",
    image: "assets/SongsDisplay/oldtownroad.jpg",
    source: "assets/Songs/Old-Town-Road(PaglaSongs).mp3",
  },
  {
    id: 6,
    name: "See You Again",
    artist: "Charlie Puth",
    genre: "hiphop",
    image: "assets/SongsDisplay/seeyouagain.jpg",
    source: "assets/Songs/Paul-Walker-See-You-Again(PaglaSongs).mp3",
  },
  {
    id: 7,
    name: "Shape Of You",
    artist: "Ed Sheeran",
    genre: "rock",
    image: "assets/SongsDisplay/shapeofyou.jpg",
    source: "assets/Songs/Shape of You-(PagalSongs.Com.IN).mp3",
  },
  {
    id: 8,
    name: "Sorry",
    artist: "Justin Bieber",
    genre: "pop",
    image: "assets/SongsDisplay/sorry.jpg",
    source: "assets/Songs/Sorry(PaglaSongs).mp3",
  },
  {
    id: 9,
    name: "Sugar",
    artist: "Maroon V",
    genre: "hiphop",
    image: "assets/SongsDisplay/sugar.jpg",
    source: "assets/Songs/Sugar - Maroon 5 320(PagalWorld).mp3",
  },
];
let playlist = {};
let currentSongIndex = 0;
let songQueue = [1];
showSongs();
document.getElementById("dropdown").addEventListener("change", showSongs);
function showSongs() {
  const dropdownValue = document.getElementById("dropdown").value;
  const list = document.getElementById("genre-list");
  list.innerHTML = "";
  if (dropdownValue === "all") {
    songs.map((song) => {
      const listItem = document.createElement("p");
      listItem.className = `song-${song.id}`;
      listItem.textContent = `${song.name} - ${song.artist}`;
      list.appendChild(listItem);
      listItem.addEventListener("click", () => {
        update(song.id);
        renderCurrentSong();
      });
    });
  } else if (dropdownValue === "pop") {
    const genreSongs = songs.filter((song) => {
      return song.genre === dropdownValue;
    });
    genreSongs.map((song) => {
      const listItem = document.createElement("p");
      listItem.className = `song-${song.id}`;
      listItem.textContent = `${song.name} - ${song.artist}`;
      list.appendChild(listItem);
      listItem.addEventListener("click", () => {
        update(song.id);
        renderCurrentSong();
      });
    });
  } else if (dropdownValue === "hiphop") {
    const genreSongs = songs.filter((song) => {
      return song.genre === dropdownValue;
    });
    genreSongs.map((song) => {
      const listItem = document.createElement("p");
      listItem.className = `song-${song.id}`;
      listItem.textContent = `${song.name} - ${song.artist}`;
      list.appendChild(listItem);
      listItem.addEventListener("click", () => {
        update(song.id);
        renderCurrentSong();
      });
    });
  } else if (dropdownValue === "rock") {
    const genreSongs = songs.filter((song) => {
      return song.genre === dropdownValue;
    });
    genreSongs.map((song) => {
      const listItem = document.createElement("p");
      listItem.className = `song-${song.id}`;
      listItem.textContent = `${song.name} - ${song.artist}`;
      list.appendChild(listItem);
      listItem.addEventListener("click", () => {
        update(song.id);
        renderCurrentSong();
      });
    });
  }
}

function renderCurrentSong() {
  renderButton();
  let song = songs.find((song) => {
    return song.id === songQueue[currentSongIndex];
  });
  const songImage = document.getElementById("song-image");
  songImage.src = song.image;
  const audio = document.getElementById("audio-bar");
  audio.src = song.source;
  const name = document.getElementById("song-name");
  const artist = document.getElementById("artist-name");
  name.textContent = song.name;
  artist.textContent = song.artist;
  audio.play();
}

function renderButton() {
  if (songQueue.length === 1) {
    const btn1 = document.getElementById("left");
    const btn2 = document.getElementById("right");
    btn1.setAttribute("disabled", "");
    btn2.setAttribute("disabled", "");
    btn1.style.backgroundColor = "#494763";
    btn2.style.backgroundColor = "#494763";
  } else if (currentSongIndex === 0) {
    const btn1 = document.getElementById("left");
    btn1.setAttribute("disabled", "");
    const btn2 = document.getElementById("right");
    btn2.removeAttribute("disabled");
    btn1.style.backgroundColor = "#494763";
    btn2.style.backgroundColor = "rgba(145,91,253,255)";
  } else if (currentSongIndex === songQueue.length - 1) {
    const btn1 = document.getElementById("left");
    btn1.removeAttribute("disabled");
    const btn2 = document.getElementById("right");
    btn2.setAttribute("disabled", "");
    btn1.style.backgroundColor = "rgba(145,91,253,255)";
    btn2.style.backgroundColor = "#494763";
  } else {
    const btn1 = document.getElementById("left");
    const btn2 = document.getElementById("right");
    btn1.removeAttribute("disabled");
    btn2.removeAttribute("disabled");
    btn1.style.backgroundColor = "rgba(145,91,253,255)";
    btn2.style.backgroundColor = "rgba(145,91,253,255)";
  }
}
renderButton();

const btn1 = document.getElementById("left");
btn1.addEventListener("click", () => {
  if (currentSongIndex === 0) {
    return;
  }
  currentSongIndex--;
  songQueue.push(songQueue[currentSongIndex]);
  renderCurrentSong();
});

const btn2 = document.getElementById("right");
btn2.addEventListener("click", () => {
  if (currentSongIndex === songQueue.length - 1) {
    return;
  }
  currentSongIndex++;
  songQueue.push(songQueue[currentSongIndex]);
  renderCurrentSong();
});

// Playlist codes
let currPlaylist = null;
const play = document.getElementById("create");

const createPlaylist = () => {
  const playListName = document.getElementById("playName").value;
  if (!playListName) {
    alert("Enter a valid playlist name");
  } else {
    playlist[playListName] = [];
    renderPlayButton();
    addtoPlaylist();
  }
};
play.addEventListener("click", createPlaylist);
function renderPlayButton() {
  const btn = document.getElementById("add");
  if (Object.keys(playlist).length === 0) {
    btn.setAttribute("disabled", "");
    btn.style.backgroundColor = "#494763";
  } else {
    btn.removeAttribute("disabled");
    btn.style.backgroundColor = "rgba(145,91,253,255)";
  }
}
renderPlayButton();

function addtoPlaylist() {
  const play = document.getElementById("playlists");
  play.innerHTML = "";
  const playlistName = Object.keys(playlist);
  playlistName.map((playl) => {
    const listItem = document.createElement("p");
    listItem.textContent = playl;
    listItem.className = "mouseover";
    listItem.addEventListener("click", () => {
      currPlaylist = listItem.textContent;
      renderPlaylistSong(listItem.textContent);
    });
    play.appendChild(listItem);
  });
}

function renderPlaylistSong(playlistName) {
  if (currPlaylist === null) {
    return;
  }
  const renderComp = document.getElementById("currPlaylist");
  renderComp.innerHTML = "";
  playlist[currPlaylist].map((song) => {
    const listItem = document.createElement("p");
    listItem.className = `song-${song.id}`;
    listItem.textContent = `${song.name} - ${song.artist}`;
    renderComp.appendChild(listItem);
    listItem.addEventListener("click", () => {
      update(song.id);
      renderCurrentSong();
    });
  });
}
const btn = document.getElementById("add");
btn.addEventListener("click", () => {
  if (currPlaylist === null) {
    alert("Please select a valid playlist");
  } else {
    let songName = document.getElementById("song-name").textContent;
    const getSong = songs.find((song) => {
      return song.name === songName;
    });
    playlist[currPlaylist].push(getSong);
    alert(`${songName} song pushed to playlist ${currPlaylist}`);
    renderPlaylistSong(playlist[currPlaylist]);
  }
});

function update(id) {
  songQueue.push(id);
  currentSongIndex = songQueue.length - 1;
}

const toggleTheme = () => {
  const root = document.documentElement;
  if (document.getElementById("mode").textContent === "Dark") {
    //backgroundcolor = rgba(232,231,230,255);
    // cardColor = rgba(107,184,222,255);
    // contrastColor = rgba(5,115,171,255)
    // textColor = black;
    document.getElementById("mode").textContent = "Light";
    document.getElementById("toggle-container").style.backgroundColor =
      "rgba(5,115,171,255)";
    root.style.setProperty("--bgColor", "rgba(86,86,87,255)");
    root.style.setProperty("--cardColor", "rgba(38,50,56,255)");
    root.style.setProperty("--contrastColor", "rgba(100,105,108,255)");
    root.style.setProperty("--textColor", "rgb(255,255,255)");
  } else {
    //backgroundcolor = rgba(86,86,87,255)
    // cardColor = rgba(38,50,56,255)
    // contrastColor = rgba(100,105,108,255)
    // textColor = white;
    document.getElementById("mode").textContent = "Dark";
    document.getElementById("toggle-container").style.backgroundColor =
      "lightgray";
    root.style.setProperty("--bgColor", "rgba(232,231,230,255)");
    root.style.setProperty("--cardColor", "rgba(107,184,222,255)");
    root.style.setProperty("--contrastColor", "rgba(5,115,171,255)");
    root.style.setProperty("--textColor", "rgb(0,0,0)");
  }
};

const mode = document.getElementById("checkbox");
mode.addEventListener("change", toggleTheme);
