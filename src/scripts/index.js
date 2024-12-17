// const menuIcon = document.getElementById("menu-icon");
const getId = (id) => document.getElementById(id);

const dropDownMenu = getId("dropdownMenu");

const menuIconFirstBar = getId("menuIconFirstBar");
const menuIconSecondBar = getId("menuIconSecondBar");
const menuIconThirdBar = getId("menuIconThirdBar");

const headerTag = getId("header");

const scrollableContainer = getId("scrollableContainer");
const scrollWrapper = getId("scrollWrapper");
const nextButton = getId("nextButtonContainer");
const prevButton = getId("prevButtonContainer");

const scrollableContainerScroll = (toWhere) => {
  let containerScrollWidth = scrollWrapper.scrollWidth;
  let itemWidth = containerScrollWidth / 5.015;
  // scrollWrapper.scrollLeft += itemWidth;
  switch (toWhere) {
    case "right":
      scrollBy({ top: 10000, behavior: "smooth" });
      scrollWrapper.scrollBy({ left: itemWidth, behavior: "smooth" });
      break;

    case "left":
      scrollWrapper.scrollBy({ left: -itemWidth, behavior: "smooth" });
      scrollBy({ top: 10000, behavior: "smooth" });
      break;
    default:
      break;
  }
};

nextButton.addEventListener("click", () => scrollableContainerScroll("right"));
prevButton.addEventListener("click", () => scrollableContainerScroll("left"));

const toggleMenu = () => {
  dropDownMenu.classList.toggle("active");
  menuIconFirstBar.classList.toggle("menuIconFirstBar");
  menuIconSecondBar.classList.toggle("menuIconSecondBar");
  menuIconThirdBar.classList.toggle("menuIconThirdBar");
};

const showAndHideHeaderBg = () => {
  document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 520) {
      headerTag.style.background = "blue";
    } else {
      headerTag.style.background = "transparent";
    }
  });
};

headerTag.style.display = "none";

const showAndHideHeader = () => {
  document.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 520) {
      headerTag.style.display = "flex";
    } else {
      headerTag.style.display = "none";
    }
  });
};

showAndHideHeaderBg();
showAndHideHeader();
