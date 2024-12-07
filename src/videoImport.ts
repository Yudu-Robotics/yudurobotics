// Crawle
const spider = "assets/video/crawle/spider.mp4";
const spider1 = "assets/video/crawle/spider1.mp4";
const flexible = "assets/video/crawle/flexible.mp4";
const friendly = "assets/video/crawle/friendly.mp4";
const iteractive = "assets/video/crawle/iteractive.mp4";
const tech = "assets/video/crawle/tech.mp4";
const versatile = "assets/video/crawle/versatile.mp4";
const stepcrawle = "assets/video/crawle/stepcrawle.mp4";
const codingcrawle = "assets/video/crawle/codingcrawle.mp4";
const aimodelcrawle = "assets/video/crawle/aimodelcrawle.mp4";

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
const steppeecee = "assets/video/peecee/3steppeecee.mp4";
const codingpeecee = "assets/video/peecee/5codingpeecee.mp4";
const aimodelpeecee = "assets/video/peecee/aimodelpeecee.mp4";

// Roboki
const iteractivero = "assets/video/roboki/interactive.mp4";
const long = "assets/video/roboki/long.mp4";
const playful = "assets/video/roboki/playful.mp4";
const powerful = "assets/video/roboki/powerful.mp4";
const wireless = "assets/video/roboki/wireless.mp4";
const steprobo = "assets/video/roboki/steprobo.mp4";
const codingrobo = "assets/video/roboki/codingrobo.mp4";
const airobo = "assets/video/roboki/airobo.mp4";

//Zing
const stepzing = "assets/video/zing/stepzing.mp4";
const codingzing = "assets/video/zing/5codingzing.mp4";
const aimodelzing = "assets/video/zing/aimodelzing.mp4";
const Interactivezing = "assets/video/zing/Interactivezing.mp4";
const sensorzing = "assets/video/zing/sensorzing.mp4";
const powerzing = "assets/video/zing/powerzing.mp4";
const smartzing = "assets/video/zing/smartzing.mp4";
const versatilezing = "assets/video/zing/versatilezing.mp4";

//klaw
const stepklaw = "assets/video/klaw/stepklaw.mp4";
const codingklaw = "assets/video/klaw/codingklaw.mp4";
const aimodelklaw = "assets/video/klaw/aimodelklaw.mp4";

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

    case "steppeecee":
      return steppeecee;
    case "codingpeecee":
      return codingpeecee;
    case "aimodelpeecee":
      return aimodelpeecee;

    //Crawle
    case "stepcrawle":
      return stepcrawle;
    case "codingcrawle":
      return codingcrawle;
    case "aimodelcrawle":
      return aimodelcrawle;

    //Zing
    case "stepzing":
      return stepzing;
    case "codingzing":
      return codingzing;
    case "aimodelzing":
      return aimodelzing;
    case "Interactivezing":
      return Interactivezing;
    case "sensorzing":
      return sensorzing;
    case "powerzing":
      return powerzing;
    case "smartzing":
      return smartzing;
    case "versatilezing":
      return versatilezing;

    //klaw
    case "stepklaw":
      return stepklaw;
    case "codingklaw":
      return codingklaw;
    case "aimodelklaw":
      return aimodelklaw;

    // Roboki
    case "iteractivero":
      return iteractivero;
    case "long":
      return long;
    case "playful":
      return playful;
    case "powerful":
      return powerful;
    case "wireless":
      return wireless;
    case "steprobo":
      return steprobo;
    case "codingrobo":
      return codingrobo;
    case "airobo":
      return airobo;

    default:
      return "nothing";
  }
}

export default renderVideo;
