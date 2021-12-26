//podcast section
var abc=document.querySelector(".abc");
var audioo = document.querySelector("audio");

let tracksObj = {
	track1: {
        name: "IS IT WORTH IT?",
        coverArt: "pics/I Got You Cover Art.png",
        soundfile: "soundfiles/is it worth it.mp3",
    },
    track2: {
        name: "TRUST",
        coverArt: "pics/AuraCoverArt.png",
        soundfile: "soundfiles/trust.mp3",
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









// Mythium Archive: https://archive.org/details/mythium/
//for music section

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'soundfiles/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Mitwa",
                "duration": "0:57",
                "file": "mitwa"
            }, {
                "track": 2,
                "name": "Pani Da Rang",
                "duration": "0:46",
                "file": "Pani da rang"
            },{
                "track": 3,
                "name": "Sapna Jahan",
                "duration": "1:29",
                "file": "sapna"
            },{
                "track": 4,
                "name": "Teri Hogaiyaan 2",
                "duration": "1:46",
                "file": "Teri Hogaiyaan"
            },{
                "track": 5,
                "name": "Baarish",
                "duration": "1:13",
                "file": "baarish"
            },{
                "track": 6,
                "name": "Jab Tak",
                "duration": "1:13",
                "file": "jabtak"
            },{
                "track": 7,
                "name": "Kuch toh hai",
                "duration": "1:08",
                "file": "kuchtohai"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
