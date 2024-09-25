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

// peecee
const peecee = "assets/peecee/peecee.png";
const avatar = "assets/peecee/Avatar.png";
const profileImage = "assets/peecee/profileImage.png";
const handArrow = "assets/peecee/hand-arrow.png";

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

    case "searchIcon":
      return searchIcon;
    case "iphone":
      return iphone;
    case "stars":
      return stars;
  }
}

export default renderImg;
