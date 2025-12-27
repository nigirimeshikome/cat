const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

const objectList = document.querySelectorAll(".object");
// .object クラスが付いた要素をすべて取得する
function callback(entries, observer) {
  // callback という名前のユーザー定義関数
  // IntersectionObserver が必要になったタイミングで自動的に呼び出してくれる（＝コールバック関数）
  // entries と observer は、IntersectionObserver が自動で渡してくれる引数
  entries.forEach((entry) => {
    // entries は「監視対象の状態が変化した要素の配列」
    // entry はその1つ分の情報（要素・見えているかどうか など）
    if (entry.isIntersecting) {
      // isIntersecting は「要素が画面内に入ったら true」
      entry.target.classList.add("show");
      // 実際の要素（target）に show クラスを付ける → CSSアニメ発火
      observer.unobserve(entry.target);
      // この要素の監視を終了。一度だけアニメを実行したいときに使う。
    }
  });
}
const options = {
  threshold: 0.5,
  // 要素の50%が画面に入ったら callback を実行する
};
const myObserver = new IntersectionObserver(callback, options);
// IntersectionObserver（画面を監視する標準API）
// callback と options をセットにして “監視マン” を作成する
objectList.forEach((target) => {
  myObserver.observe(target);
  // 取得したすべての .object 要素を監視対象に登録する
  // forEach を使うことで「複数ある .object を1つずつ observe する」
});

const navBtn = document.querySelector(".nav-button");
const navItems = document.querySelector(".nav-sp .nav-items");

navBtn.addEventListener("click", () => {
  navItems.classList.toggle("nav-items--open");
});
