var abc=document.querySelector(".abc");
var audioo = document.querySelector("audio");

let tracksObj = {
	track1: {
        name: "Mitwa",
        coverArt: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1024px-NYCS-bull-trans-1.svg.png",
        soundfile: "soundfiles/mitwa.mp3",
    },
    track2: {
        name: "Pani Da Rang",
        coverArt: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png",
        soundfile: "soundfiles/Pani da rang.mp3",
    },
    track3: {
        name: "Sapna Jahan",
        coverArt: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png",
        soundfile: "soundfiles/sapna.mp3",
    },
   
    track4: {
        name: "Teri Hogaiyaan 2",
        coverArt: "pics/I Got You Cover Art.png",
        soundfile: "soundfiles/Teri Hogaiyaan.mp3",
    },
    track5: {
        name: "Baarish",
        coverArt: "pics/evenNewStrict.png",
        soundfile: "soundfiles/baarish.mp3",
    },
    track6: {
        name: "Jab Tak",
        coverArt: "pics/AuraCoverArt.png",
        soundfile: "soundfiles/jabtak.mp3",
    },
    track7: {
        name: "Kuch to hai",
        coverArt: "pics/I Got You Cover Art.png",
        soundfile: "soundfiles/kuchtohai.mp3",
    },

    
}

let audioPlayer = document.getElementById("audio")
let audioSource = document.getElementById("audioSource")

audioSource.src = tracksObj.track1.soundfile
audioPlayer.load()

let currentTrack = 1;

let tracksObjLength = Object.keys(tracksObj).length

for (let i = 1; i <= tracksObjLength; i++) {

    tracksObj[`track${i}`].isPlaying = false

    const alltracksBossContainer = document.getElementById("alltracksBossContainer")
    var tracksContainer = document.createElement("div");
    tracksContainer.classList.add("tracksContainer");
    alltracksBossContainer.appendChild(tracksContainer);

    var coverArtContainer = document.createElement("div");
    coverArtContainer.classList.add("coverArtContainer");
    tracksContainer.appendChild(coverArtContainer);
    var coverArtPic = document.createElement("img");
    if (i === 2) {
        coverArtPic.classList.add("coverArt");
    }
    coverArtPic.classList.add("iGotYouCoverArt");
    coverArtContainer.appendChild(coverArtPic);

    var trackTitleContainer = document.createElement("div");
    trackTitleContainer.classList.add("trackTitleContainer");
    tracksContainer.appendChild(trackTitleContainer);
    var title = document.createElement("div");
    title.classList.add("title");
    trackTitleContainer.appendChild(title);

    var playPauseContainer = document.createElement("div");
    playPauseContainer.classList.add("playPauseContainer");
    playPauseContainer.id = `playTrack${i}`
    tracksContainer.appendChild(playPauseContainer);
    var fontAwesomePlayTrackIcon = document.createElement("i");
    fontAwesomePlayTrackIcon.classList.add("fas", "fa-play", "fa-2x", "fontAwesomePlayTrackIcon");
    playPauseContainer.appendChild(fontAwesomePlayTrackIcon);
}

// const tracks is an array of how many different songs I will be displaying on the screen
const tracks = document.getElementsByClassName("tracksContainer")

for (let i = 0; i < tracks.length; i++) {
    window[`track${i + 1}`] = tracks[i]
    window[`track${i + 1}CoverArt`] = window[`track${i + 1}`].querySelector(".coverArtContainer").querySelector(".iGotYouCoverArt").src = tracksObj[`track${i + 1}`].coverArt
    window[`track${i + 1}Title`] = window[`track${i + 1}`].querySelector(".trackTitleContainer").querySelector(".title").innerText = tracksObj[`track${i + 1}`].name

}

let firstPlay;


function playAndPauseTrack() {
    let id = this.id
    id = id[id.length - 1]

    if (firstPlay === undefined) {
        currentTrack = id;
        firstPlay = true
    } 
        if (tracksObj[`track${id}`].isPlaying === false) {
            audioSource.src = tracksObj[`track${id}`].soundfile
            if (currentTrack != id || (firstPlay === true)) {
                audioPlayer.load()
            }
            audioPlayer.play()
            window[`track${id}`].querySelector(".playPauseContainer").innerHTML = '<i class="fas fa-pause fa-2x fontAwesomePlayTrackIcon"></i>'
            if (currentTrack != id) {
                window[`track${currentTrack}`].querySelector(".playPauseContainer").innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'
                tracksObj[`track${currentTrack}`].isPlaying = false
            }
        } else {
            audioPlayer.pause()
            window[`track${id}`].querySelector(".playPauseContainer").innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'

        }

        firstPlay = false
        currentTrack = id;

        tracksObj[`track${id}`].isPlaying = !tracksObj[`track${id}`].isPlaying

    }


const playButton = document.getElementsByClassName("playPauseContainer")

for (let i = 0; i < playButton.length; i++) {
    playButton[i].addEventListener("click", playAndPauseTrack)
}

function changeIconFromAudioController () {
    if (tracksObj[`track${currentTrack}`].isPlaying === false) {
        window[`track${currentTrack}`].querySelector(".playPauseContainer").innerHTML = '<i class="fas fa-pause fa-2x fontAwesomePlayTrackIcon"></i>'
        
    } else {
        window[`track${currentTrack}`].querySelector(".playPauseContainer").innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'
    }
    tracksObj[`track${currentTrack}`].isPlaying = !tracksObj[`track${currentTrack}`].isPlaying
}

audioPlayer.addEventListener("click", changeIconFromAudioController)


setTimeout(function () {
    console.log('I will run after 2 seconds');
    abc.classList.add("invisible");
    abc.classList.remove("animationn");
}, 4000);


$("#down").click(function() {
    audioo.loop=false;
  audioo.play();

});
