//other
const logo = "assets/Logo.png";
const favicon = "assets/favicon.png";

// home
const headerSection = "assets/other/Section Seperators.svg";
const footerSection = "assets/home/FooterSection.png";
const homeImage = "assets/home/homeImage.png";
const star1 = "assets/home/star1.png";
const star2 = "assets/home/star2.png";
const blurStar = "assets/home/blurStar.png";
const avtarGroup = "assets/home/Avatar group.png";
const appStore = "assets/home/AppStoreBadge.png";
const googlePlay = "assets/home/GooglePlayBadge.png";
const zigzaginhome = "assets/home/zigzaginhome.svg";
const curv = "assets/home/curv.png";

// zing
const humanoid = "assets/zing/Humanoid.png";
const productBackground = "assets/zing/productBackground.png";
const productCrawle = "assets/zing/productCrawle.png";

// other
const arrow = "assets/other/arrow.png";
const searchIcon = "assets/other/searchIcon.png";
const arrowUpRight = "assets/other/arrow-up-right.png";
const handDrawArrow2 = "assets/other/Hand-drawn-arrow-2.png";
const iphone = "assets/other/iPhone.png";
const monitorAndPhone = "assets/other/monitor-phone.png";
const imagePlaceholder = "assets/other/imagePlaceholder.png";
const imagePlaceholder2 = "assets/other/imagePlaceholder2.png";
const stars = "assets/other/Stars.png";
const girls = "assets/other/girls.png";
const macbook = "assets/other/macbook.png";
const videoPlayer = "assets/other/video-player.png";
const testimonial = "assets/other/testimonial.png";

// peecee
const peecee = "assets/peecee/peecee.png";
const avatar = "assets/peecee/Avatar.png";
const profileImage = "assets/peecee/profileImage.png";
const handArrow = "assets/peecee/hand-arrow.png";

// testimonial

const bannerImg1 = "assets/testimonial/Mask group.png";
const bannerImg2 = "assets/testimonial/Mask group (1).png";
const bannerImg3 = "assets/testimonial/Mask group (2).png";
const bannerImg4 = "assets/testimonial/Mask group (3).png";
const bannerImg5 = "assets/testimonial/Mask group (4).png";
const bannerImg6 = "assets/testimonial/Mask group (5).png";

const bg1 = "assets/testimonial/bg-featured product.png";
const bg2 = "assets/testimonial/bg-featured product (1).png";
const bg3 = "assets/testimonial/bg-featured product (2).png";
const bg4 = "assets/testimonial/bg-featured product (3).png";
const bg5 = "assets/testimonial/bg-featured product (4).png";
const bg6 = "assets/testimonial/bg-featured product (5).png";
const bg7 = "assets/testimonial/bg-featured product (6).png";

//Partner
const play = "assets/partner/playbutton.png";
const arrow1 = "assets/partner/arrow.svg";
const Icon = "assets/partner/Icon.svg";
const peace = "assets/partner/peace.svg";
const result = "assets/partner/result.svg";
const robot = "assets/partner/robot.svg";
const hand = "assets/partner/hand.svg";
const plan = "assets/partner/plan.svg";
const strong = "assets/partner/strong.svg";
const winning = "assets/partner/winning.svg";
const line = "assets/partner/line.svg";
const imgonp = "assets/partner/imgonp.svg";
const imgonm = "assets/partner/imgonm.svg";
const imgong = "assets/partner/imgong.svg";
const afterw = "assets/partner/afterw.svg";

//plode
const plodeHomeImg = "assets/plode/plodeHomeImg.png";

//Not Found
const notFound = "assets/notFound.png";

//footer
const madeInIndia = "assets/madeInIndia.svg";

function renderImg(imgName: string) {
  switch (imgName) {
    // home
    case "logo":
      return logo;

    case "favicon":
      return favicon;

    case "headerSection":
      return headerSection;

    case "footerSection":
      return footerSection;

    case "appStore":
      return appStore;

    case "googlePlay":
      return googlePlay;

    case "homeImage":
      return homeImage;

    case "blurStar":
      return blurStar;

    case "star1":
      return star1;

    case "star2":
      return star2;

    case "avtarGroup":
      return avtarGroup;
    case "videoPlayer":
      return videoPlayer;
    case "zigzaginhome":
      return zigzaginhome;
    case "curv":
      return curv;

    // zing
    case "humanoid":
      return humanoid;

    case "productBackground":
      return productBackground;
    case "productCrawle":
      return productCrawle;

    // peecee
    case "peecee":
      return peecee;
    case "avatar":
      return avatar;
    case "profileImage":
      return profileImage;
    case "handArrow":
      return handArrow;

    // other
    case "arrow":
      return arrow;
    case "monitorAndPhone":
      return monitorAndPhone;
    case "imagePlaceholder":
      return imagePlaceholder;
    case "imagePlaceholder2":
      return imagePlaceholder2;
    case "girls":
      return girls;
    case "macbook":
      return macbook;
    case "handDrawArrow2":
      return handDrawArrow2;

    case "arrowUpRight":
      return arrowUpRight;
    case "testimonial":
      return testimonial;

    case "searchIcon":
      return searchIcon;
    case "iphone":
      return iphone;
    case "stars":
      return stars;

    // testimonial
    case "bannerImg1":
      return bannerImg1;
    case "bannerImg2":
      return bannerImg2;
    case "bannerImg3":
      return bannerImg3;
    case "bannerImg4":
      return bannerImg4;
    case "bannerImg5":
      return bannerImg5;
    case "bannerImg6":
      return bannerImg6;
    case "bg1":
      return bg1;
    case "bg2":
      return bg2;
    case "bg3":
      return bg3;
    case "bg4":
      return bg4;
    case "bg5":
      return bg5;
    case "bg6":
      return bg6;
    case "bg7":
      return bg7;

    //partner
    case "play":
      return play;
    case "arrow1":
      return arrow1;
    case "Icon":
      return Icon;
    case "peace":
      return peace;
    case "result":
      return result;
    case "robot":
      return robot;
    case "hand":
      return hand;
    case "plan":
      return plan;
    case "strong":
      return strong;
    case "winning":
      return winning;
    case "line":
      return line;
    case "imgonp":
      return imgonp;
    case "imgonm":
      return imgonm;
    case "imgong":
      return imgong;
    case "afterw":
      return afterw;

    //plode
    case "plodeHomeImg":
      return plodeHomeImg;

    //Not Found
    case "notFound":
      return notFound;

    //footer
    case "madeInIndia":
      return madeInIndia;
  }
}

export default renderImg;
