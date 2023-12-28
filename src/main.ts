import './style.css';

function setPageScroll() {
  const htmlElement = document.documentElement;
  const percentScroll = htmlElement.scrollTop / htmlElement.clientHeight;
  const scroll = percentScroll * 100;
  htmlElement.style.setProperty('--scroll', `${scroll}`);

  const calculatedWidth =
    50 + 1 * Math.min(Math.min(scroll, 100), 30) * (50 / 30);
  console.log('scroll:', scroll);
  console.log('width:', calculatedWidth);
  console.log(
    'transformed width:',
    Math.min(0, scroll - 200) +
      50 +
      1 * Math.min(Math.min(scroll, 100), 30) * (50 / 30),
  );
}

setPageScroll();
document.addEventListener('resize', setPageScroll);
document.addEventListener('scroll', setPageScroll);
