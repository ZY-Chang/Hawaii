let header = document.querySelector("header");
//要注意CSS樣式的命名
let header_A = document.querySelectorAll("header div.nav ul li a");
//確認內容
// console.log(header);
// console.log(header_A);

window.addEventListener("scroll", () => {
  //當你往下滾動時，顯示Y軸位置，確認過後就可以去掉
  //   console.log(window.scrollY);
  //設定完成之後，導覽列的文字並不會被改變，因為這邊的設定是，一層層往下繼承到<a href>，但<a href>原本就有自己的設定，祖輩的設定無法更改子孫的設定
  //所以我們多抓header_child
  if (window.scrollY != 0) {
    header.style.backgroundColor = "#00777b";
    header.style.color = "white";
    header_A.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    //滾回去的時候，去掉這些設定
    header.style = "";
    header_A.forEach((a) => {
      a.style.color = "#00777b";
    });
  }
});
