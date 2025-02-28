// Crawle
const spider = "assets/video/crawle/spider.webm";
const spider1 = "assets/video/crawle/spider1.webm";
const flexible = "assets/video/crawle/flexible.webm";
const friendly = "assets/video/crawle/friendly.webm";
const iteractive = "assets/video/crawle/iteractive.webm";
const tech = "assets/video/crawle/tech.webm";
const versatile = "assets/video/crawle/versatile.webm";
const stepcrawle = "assets/video/crawle/stepcrawle.webm";
const codingcrawle = "assets/video/crawle/codingcrawle.webm";
const aimodelcrawle = "assets/video/crawle/aimodelcrawle.webm";

//Peecee
const brainy = "assets/video/peecee/brainy.webm";
const buzz = "assets/video/peecee/buzz.webm";
const expressive = "assets/video/peecee/expressive.webm";
const power = "assets/video/peecee/power.webm";
const rainbow = "assets/video/peecee/rainbow.webm";
const sensors = "assets/video/peecee/sensors.webm";
const iot = "assets/video/peecee/iot.webm";
const plug = "assets/video/peecee/plug.webm";
const wire = "assets/video/peecee/wire.webm";
// const live = "assets/video/peecee/plug.webm";
const ird = "assets/video/peecee/ird.webm";
const Joystickandswitches = "assets/video/peecee/Joystickandswitches.webm";
const LaserLedDisplay = "assets/video/peecee/LaserLedDisplay.webm";
const plugandplay = "assets/video/peecee/plugandplay.webm";
const steppeecee = "assets/video/peecee/3steppeecee.webm";
const codingpeecee = "assets/video/peecee/5codingpeecee.webm";
const aimodelpeecee = "assets/video/peecee/aimodelpeecee.webm";

// Roboki
const iteractivero = "assets/video/roboki/interactive.webm";
const long = "assets/video/roboki/long.webm";
const playful = "assets/video/roboki/playful.webm";
const powerful = "assets/video/roboki/powerful.webm";
const wireless = "assets/video/roboki/wireless.webm";
const steprobo = "assets/video/roboki/steprobo.webm";
const codingrobo = "assets/video/roboki/codingrobo.webm";
const airobo = "assets/video/roboki/airobo.webm";

//Zing
const stepzing = "assets/video/zing/stepzing.webm";
const codingzing = "assets/video/zing/5codingzing.webm";
const aimodelzing = "assets/video/zing/aimodelzing.webm";
const Interactivezing = "assets/video/zing/Interactivezing.webm";
const sensorzing = "assets/video/zing/sensorzing.webm";
const powerzing = "assets/video/zing/powerzing.webm";
const smartzing = "assets/video/zing/smartzing.webm";
const versatilezing = "assets/video/zing/versatilezing.webm";

//klaw
const stepklaw = "assets/video/klaw/stepklaw.webm";
const codingklaw = "assets/video/klaw/codingklaw.webm";
const aimodelklaw = "assets/video/klaw/aimodelklaw.webm";

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
      return plug;
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
