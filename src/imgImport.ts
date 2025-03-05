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
  | "ceoAvatar"
  | "filepe"
  | "vivek"
  | "shekhar"
  | "gowtham"
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
  crawlem: "/assets/crawle/crawlem.webp",
  robokim: "/assets/roboki/robokim.webp",
  zingm: "/assets/zing/zingm.webp",
  peeceem: "/assets/peecee/peeceem.webp",
  klawbm: "/assets/klawb/klawbm.webp",

  // Roboki
  playroboki: "/assets/roboki/playroboki.webp",

  // Klawb
  playklawb: "/assets/klawb/playklawb.webp",
  arrowdown: "/assets/klawb/Hand-drawn.svg",

  // Crawle
  playcrawle: "/assets/crawle/playcrawle.webp",

  // Basic /assets
  logo: "/assets/Logo.png",
  favicon: "/assets/favicon.png",
  logoblack: "/assets/logoblack.webp",
  good: "/assets/other/good.svg",
  india: "/assets/other/india.svg",
  reddot: "/assets/other/reddot.svg",
  check: "/assets/home/Check icon.svg",

  // Home
  headerSection: "/assets/other/Section Seperators.svg",
  footerSection: "/assets/home/FooterSection.webp",
  ceoAvatar: "/assets/home/ceoreview.webp",
  homeImage: "/assets/home/homeImage.webp",
  star1: "/assets/home/star1.png",
  star2: "/assets/home/star2.png",
  blurStar: "/assets/home/blurStar.png",
  avtarGroup: "/assets/home/Avatar group.png",
  appStore: "/assets/home/AppStoreBadge.png",
  googlePlay: "/assets/home/GooglePlayBadge.png",
  zigzaginhome: "/assets/home/zigzaginhome.svg",
  curv: "/assets/home/curv.webp",
  "x-close": "/assets/home/x-close.svg",

  // Zing
  humanoid: "/assets/zing/Humanoid.webp",
  humanoidSmall: "/assets/zing/zingping.webp",
  productBackground: "/assets/zing/productBackground.webp",
  productCrawle: "/assets/zing/productCrawle.webp",
  playzing: "/assets/zing/playzing.webp",
  // ceo
  filepe: "/assets/ceo/filepe.webp",
  vivek: "/assets/ceo/vivek.webp",
  shekhar: "/assets/ceo/shekhar.webp",
  gowtham: "/assets/ceo/gowtham.webp",
  // Other
  arrow: "/assets/other/arrow.webp",
  searchIcon: "/assets/other/searchIcon.png",
  arrowUpRight: "/assets/other/arrow-up-right.png",
  handDrawArrow2: "/assets/other/Hand-drawn-arrow-2.webp",
  iphone: "/assets/other/iPhone.webp",
  monitorAndPhone: "/assets/other/monitor-phone.webp",
  imagePlaceholder: "/assets/other/imagePlaceholder.webp",
  imagePlaceholder2: "/assets/other/imagePlaceholder2.webp",
  stars: "/assets/other/Stars.png",
  girls: "/assets/other/girls.webp",
  macbook: "/assets/other/macbook.webp",
  videoPlayer: "/assets/other/video-player.webp",
  testimonial: "/assets/other/testimonial.webp",
  aimodel: "/assets/other/aimodel.webp",
  fivecoding: "/assets/other/fivecoding.webp",
  threestep: "/assets/other/threestep.webp",
  search: "/assets/icons/search-lg.png",

  // Peecee
  peecee: "/assets/peecee/peecee.webp",
  avatar: "/assets/peecee/Avatar.png",
  profileImage: "/assets/peecee/profileImage.webp",
  handArrow: "/assets/peecee/hand-arrow.webp",
  playpeecee: "/assets/peecee/playpeecee.webp",

  // Testimonial
  bannerImg1: "/assets/testimonial/Mask group.webp",
  bannerImg2: "/assets/testimonial/Mask group (1).webp",
  bannerImg3: "/assets/testimonial/Mask group (2).webp",
  bannerImg4: "/assets/testimonial/Mask group (3).webp",
  bannerImg5: "/assets/testimonial/Mask group (4).webp",
  bannerImg6: "/assets/testimonial/Mask group (5).webp",
  bg1: "/assets/testimonial/bg-featured product.webp",
  bg2: "/assets/testimonial/bg-featured product (1).webp",
  bg3: "/assets/testimonial/bg-featured product (2).webp",
  bg4: "/assets/testimonial/bg-featured product (3).webp",
  bg5: "/assets/testimonial/bg-featured product (4).webp",
  bg6: "/assets/testimonial/bg-featured product (5).webp",
  bg7: "/assets/testimonial/bg-featured product (6).webp",

  // Partner
  play: "/assets/partner/playbutton.webp",
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
  plodeHomeImg: "/assets/plode/plodeHomeImg.webp",
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
  notFound: "/assets/notFound.webp",
  playtrons: "/assets/playtrons.png",

  // Footer
  madeInIndia: "/assets/madeInIndia.svg",

  // Mobile menu
  ted8: "/assets/roboki/Ted8.webp",
  toy: "/assets/other/playdynamex1.webp",
  Crawle1: "/assets/other/Crawle1.webp",
  Zing1: "/assets/other/Zing1.webp",
  Roboki1: "/assets/roboki/roboki8.webp",
  AIIII: "/assets/roboki/AI-I-8.webp",
  Toki0: "/assets/roboki/Toki8.webp",
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
