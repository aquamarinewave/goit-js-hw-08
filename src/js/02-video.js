import Player from '@vimeo/player';

// Select with the DOM API
const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

const stoppedOn = localStorage.getItem("videoplayer-current-time");

if (stoppedOn) {
    console.log(stoppedOn);
    iframePlayer.setCurrentTime(stoppedOn).then(function(seconds) {
    console.log(seconds);  // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
});

}

const onPlay = function({duration, percent, seconds}) {
    // data is an object containing properties specific to that event
    localStorage.setItem("videoplayer-current-time", seconds);
};

iframePlayer.on('timeupdate', onPlay);