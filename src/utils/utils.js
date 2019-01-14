  export const leftPad = (number) => {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number;
  }
  export const formattedTime = (secs) => {
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return `${minutes} : ${leftPad(seconds.toString())}`;
  }
  export const isFullScreen = () => {
    return document.fullscreen || document.webkitIsFullScreen 
           || document.mozFullScreen;
  }
  export const requestFullScreen = element => {
    try{ element.requestFullScreen()} catch(e){}
    try{ element.webkitRequestFullScreen()} catch(e){}
    try{ element.mozRequestFullScreen()} catch(e){}
    try{ element.msRequestFullScreen()} catch(e){}
  }
  export const exitFullScreen = () => {
    try {document.exitFullscreen()} catch(e){}
    try {document.webkitExitFullscreen()} catch(e){}
    try {document.mozCancelFullscreen()} catch(e){}
    try {document.msexitFullScreen()} catch(e){}
  }
