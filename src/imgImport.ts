//other
const logo = "/assets/Logo.png";
const favicon = "/assets/favicon.png";

// home
const headerSection = "/assets/home/Section.png";
const homeImage = "/assets/home/homeImage.png";
const star1 = "/assets/home/star1.png";
const star2 = "/assets/home/star2.png";
const blurStar = "/assets/home/blurStar.png";

// zing
const humanoid = "/assets/zing/Humanoid.png";
const productBackground = "/assets/zing/productBackground.png";
const productDetail1 = "/assets/zing/productDetail1.png";

// other
const arrow = "/assets/other/arrow.png";
const searchIcon = "/assets/other/searchIcon.png";

function renderImg(imgName: string) {
  switch (imgName) {
    // home
    case "logo":
      return logo;

    case "favicon":
      return favicon;

    case "headerSection":
      return headerSection;

    case "homeImage":
      return homeImage;

    case "blurStar":
      return blurStar;

    case "star1":
      return star1;

    case "star2":
      return star2;

    // zing
    case "humanoid":
      return humanoid;

    case "productBackground":
      return productBackground;
    case "productDetail1":
      return productDetail1;

    // other
    case "arrow":
      return arrow;

    case "searchIcon":
      return searchIcon;
  }
}

export default renderImg;
