// Crawle
const spider = "assets/video/crawle/spider.mp4";
const spider1 = "assets/video/crawle/spider1.mp4";
const flexible = "assets/video/crawle/flexible.mp4";
const friendly = "assets/video/crawle/friendly.mp4";
const iteractive = "assets/video/crawle/iteractive.mp4";
const tech = "assets/video/crawle/tech.mp4";
const versatile = "assets/video/crawle/versatile.mp4";

//Peecee
const brainy = "assets/video/peecee/brainy.mp4";
const buzz = "assets/video/peecee/buzz.mp4";
const expressive = "assets/video/peecee/expressive.mp4";
const power = "assets/video/peecee/power.mp4";
const rainbow = "assets/video/peecee/rainbow.mp4";
const sensors = "assets/video/peecee/sensors.mp4";
const iot = "assets/video/peecee/iot.mp4";
const plug = "assets/video/peecee/plug.mp4";
const wire = "assets/video/peecee/wire.mp4";
const live = "assets/video/peecee/plug.mp4";
const ird = "assets/video/peecee/ird.mp4";
const Joystickandswitches = "assets/video/peecee/Joystickandswitches.mp4";
const LaserLedDisplay = "assets/video/peecee/LaserLedDisplay.mp4";
const plugandplay = "assets/video/peecee/plugandplay.mp4";

function renderVideo(video: string) {
  switch (video) {
    case "spider":
      return spider;
    case "spider1":
      return spider1;
    case "flexible":
      return flexible;
    case "friendly":
      return friendly;
    case "interactive":
      return iteractive;
    case "tech":
      return tech;
    case "versatile":
      return versatile;
    case "brainy":
      return brainy;
    case "buzz":
      return buzz;
    case "expressive":
      return expressive;
    case "power":
      return power;
    case "rainbow":
      return rainbow;
    case "sensors":
      return sensors;

    case "iot":
      return iot;
    case "plug":
      plug;
    case "wire":
      return wire;
    case "live":
      return plug;

    case "ird":
      return ird;
    case "Joystickandswitches":
      return Joystickandswitches;
    case "LaserLedDisplay":
      return LaserLedDisplay;
    case "plugandplay":
      return plugandplay;
    default:
      return "nothing";
  }
}

export default renderVideo;
