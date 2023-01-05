import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const iframePlayer = new Player(iframe);

const stoppedOn = localStorage.getItem("videoplayer-current-time");

const rememberStopPoint = Throttle((seconds) => {
  localStorage.setItem("videoplayer-current-time", seconds);
}, 1000, { trailing: false });

const onPlay = ({seconds}) => {
  rememberStopPoint(seconds);
};

if (stoppedOn) {
  iframePlayer.setCurrentTime(stoppedOn);
}

iframePlayer.on('timeupdate', onPlay);
