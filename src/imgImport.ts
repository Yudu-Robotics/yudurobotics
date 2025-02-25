// Define all possible image names
type ImageName =
  // Mobile images
  | "crawlem"
  | "robokim"
  | "zingm"
  | "peeceem"
  | "klawbm"
  // Roboki
  | "playroboki"
  // Klawb
  | "playklawb"
  | "arrowdown"
  // Crawle
  | "playcrawle"
  // Basic /assets
  | "logo"
  | "favicon"
  | "logoblack"
  | "good"
  | "india"
  | "reddot"
  | "check"
  // Home
  | "headerSection"
  | "footerSection"
  | "homeImage"
  | "star1"
  | "star2"
  | "blurStar"
  | "avtarGroup"
  | "appStore"
  | "googlePlay"
  | "zigzaginhome"
  | "curv"
  | "x-close"
  // Zing
  | "humanoid"
  | "humanoidSmall"
  | "productBackground"
  | "productCrawle"
  | "playzing"
  // Other
  | "arrow"
  | "searchIcon"
  | "arrowUpRight"
  | "handDrawArrow2"
  | "iphone"
  | "monitorAndPhone"
  | "imagePlaceholder"
  | "imagePlaceholder2"
  | "stars"
  | "girls"
  | "macbook"
  | "videoPlayer"
  | "testimonial"
  | "aimodel"
  | "fivecoding"
  | "threestep"
  | "search"
  // Peecee
  | "peecee"
  | "avatar"
  | "profileImage"
  | "handArrow"
  | "playpeecee"
  // Testimonial
  | "bannerImg1"
  | "bannerImg2"
  | "bannerImg3"
  | "bannerImg4"
  | "bannerImg5"
  | "bannerImg6"
  | "bg1"
  | "bg2"
  | "bg3"
  | "bg4"
  | "bg5"
  | "bg6"
  | "bg7"
  // Partner
  | "play"
  | "arrow1"
  | "Icon"
  | "peace"
  | "result"
  | "robot"
  | "hand"
  | "plan"
  | "strong"
  | "winning"
  | "line"
  | "imgonp"
  | "imgonm"
  | "imgong"
  | "afterw"
  // Plode
  | "plodeHomeImg"
  | "zigzag"
  | "uparrow"
  | "fixable"
  | "instant"
  | "real"
  | "whitezigzag"
  | "leftarrow"
  | "rightarrow"
  | "playstore"
  // Not Found
  | "notFound"
  | "playtrons"
  // Footer
  | "madeInIndia"
  // Mobile menu
  | "ted8"
  | "toy"
  | "Crawle1"
  | "Zing1"
  | "Roboki1"
  | "AIIII"
  | "Toki0";

// Image path constants
const IMAGE_PATHS = {
  // Mobile images
  crawlem: "/assets/crawle/crawlem.png",
  robokim: "/assets/roboki/robokim.png",
  zingm: "/assets/zing/zingm.png",
  peeceem: "/assets/peecee/peeceem.png",
  klawbm: "/assets/klawb/klawbm.png",

  // Roboki
  playroboki: "/assets/roboki/playroboki.png",

  // Klawb
  playklawb: "/assets/klawb/playklawb.png",
  arrowdown: "/assets/klawb/Hand-drawn.svg",

  // Crawle
  playcrawle: "/assets/crawle/playcrawle.png",

  // Basic /assets
  logo: "/assets/Logo.png",
  favicon: "/assets/favicon.png",
  logoblack: "/assets/logoblack.png",
  good: "/assets/other/good.svg",
  india: "/assets/other/india.svg",
  reddot: "/assets/other/reddot.svg",
  check: "/assets/home/Check icon.svg",

  // Home
  headerSection: "/assets/other/Section Seperators.svg",
  footerSection: "/assets/home/FooterSection.png",
  homeImage: "/assets/home/homeImage.png",
  star1: "/assets/home/star1.png",
  star2: "/assets/home/star2.png",
  blurStar: "/assets/home/blurStar.png",
  avtarGroup: "/assets/home/Avatar group.png",
  appStore: "/assets/home/AppStoreBadge.png",
  googlePlay: "/assets/home/GooglePlayBadge.png",
  zigzaginhome: "/assets/home/zigzaginhome.svg",
  curv: "/assets/home/curv.png",
  "x-close": "/assets/home/x-close.svg",

  // Zing
  humanoid: "/assets/zing/Humanoid.png",
  humanoidSmall: "/assets/zing/zingping.png",
  productBackground: "/assets/zing/productBackground.png",
  productCrawle: "/assets/zing/productCrawle.png",
  playzing: "/assets/zing/playzing.png",

  // Other
  arrow: "/assets/other/arrow.png",
  searchIcon: "/assets/other/searchIcon.png",
  arrowUpRight: "/assets/other/arrow-up-right.png",
  handDrawArrow2: "/assets/other/Hand-drawn-arrow-2.png",
  iphone: "/assets/other/iPhone.png",
  monitorAndPhone: "/assets/other/monitor-phone.png",
  imagePlaceholder: "/assets/other/imagePlaceholder.png",
  imagePlaceholder2: "/assets/other/imagePlaceholder2.png",
  stars: "/assets/other/Stars.png",
  girls: "/assets/other/girls.png",
  macbook: "/assets/other/macbook.png",
  videoPlayer: "/assets/other/video-player.png",
  testimonial: "/assets/other/testimonial.png",
  aimodel: "/assets/other/aimodel.png",
  fivecoding: "/assets/other/fivecoding.png",
  threestep: "/assets/other/threestep.png",
  search: "/assets/icons/search-lg.png",

  // Peecee
  peecee: "/assets/peecee/peecee.png",
  avatar: "/assets/peecee/Avatar.png",
  profileImage: "/assets/peecee/profileImage.png",
  handArrow: "/assets/peecee/hand-arrow.png",
  playpeecee: "/assets/peecee/playpeecee.png",

  // Testimonial
  bannerImg1: "/assets/testimonial/Mask group.png",
  bannerImg2: "/assets/testimonial/Mask group (1).png",
  bannerImg3: "/assets/testimonial/Mask group (2).png",
  bannerImg4: "/assets/testimonial/Mask group (3).png",
  bannerImg5: "/assets/testimonial/Mask group (4).png",
  bannerImg6: "/assets/testimonial/Mask group (5).png",
  bg1: "/assets/testimonial/bg-featured product.png",
  bg2: "/assets/testimonial/bg-featured product (1).png",
  bg3: "/assets/testimonial/bg-featured product (2).png",
  bg4: "/assets/testimonial/bg-featured product (3).png",
  bg5: "/assets/testimonial/bg-featured product (4).png",
  bg6: "/assets/testimonial/bg-featured product (5).png",
  bg7: "/assets/testimonial/bg-featured product (6).png",

  // Partner
  play: "/assets/partner/playbutton.png",
  arrow1: "/assets/partner/arrow.svg",
  Icon: "/assets/partner/Icon.svg",
  peace: "/assets/partner/peace.svg",
  result: "/assets/partner/result.svg",
  robot: "/assets/partner/robot.svg",
  hand: "/assets/partner/hand.svg",
  plan: "/assets/partner/plan.svg",
  strong: "/assets/partner/strong.svg",
  winning: "/assets/partner/winning.svg",
  line: "/assets/partner/line.svg",
  imgonp: "/assets/partner/imgonp.svg",
  imgonm: "/assets/partner/imgonm.svg",
  imgong: "/assets/partner/imgong.svg",
  afterw: "/assets/partner/afterw.svg",

  // Plode
  plodeHomeImg: "/assets/plode/plodeHomeImg.png",
  zigzag: "/assets/plode/zigzag.svg",
  uparrow: "/assets/plode/uparrow.svg",
  fixable: "/assets/plode/fixable.svg",
  instant: "/assets/plode/instant.svg",
  real: "/assets/plode/real.svg",
  whitezigzag: "/assets/plode/whitezigzag.svg",
  leftarrow: "/assets/plode/leftarrow.svg",
  rightarrow: "/assets/plode/rightarrow.svg",
  playstore: "/assets/plode/playstore.png",

  // Not Found
  notFound: "/assets/notFound.png",
  playtrons: "/assets/playtrons.png",

  // Footer
  madeInIndia: "/assets/madeInIndia.svg",

  // Mobile menu
  ted8: "/assets/roboki/Ted8.svg",
  toy: "//assets/other/playdynamex1.svg",
  Crawle1: "//assets/other/Crawle1.svg",
  Zing1: "//assets/other/Zing1.svg",
  Roboki1: "/assets/roboki/roboki8.svg",
  AIIII: "/assets/roboki/AI-I-8.svg",
  Toki0: "/assets/roboki/Toki8.svg",
} as const;

/**
 * Renders an image path based on the provided image name
 * @param imgName - The name of the image to render
 * @returns The path to the requested image or a fallback image if not found
 */
function renderImg(imgName: ImageName): string {
  const imagePath = IMAGE_PATHS[imgName];

  if (!imagePath) {
    console.warn(`Image "${imgName}" not found in renderImg`);
    return IMAGE_PATHS.notFound;
  }

  return imagePath;
}

// Export types and function
export type { ImageName };
export default renderImg;
