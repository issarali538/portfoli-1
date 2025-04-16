const autoTyping = document.getElementById("auto-typing");
const options = {
  typeSpeed: 50,
  deleteSpeed: 50,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
};

const typing = new AutoTyping(
  "#auto-typing",
  ["A Web Developer", "and Web Designer"],
  options
);
typing.start();
