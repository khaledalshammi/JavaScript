/*
DOM [Events]
- Use Events On HTML
- Use Events On JS
--- onclick (عند الضغط)
--- oncontextmenu (كلك يمين)
--- onmouseenter (مجرد انك مريت فوقو بيشتغل)
--- onmouseleave (بس تشيل الماوس عنو)

--- onload (كل مرة نحدث بها الصفحة تظهر لنا)
--- onscroll (لما ننزل او نطلع)
--- onresize (لما نصغير بحجم الشاشة بيشتغل)

--- onfocus ( عند دخول الحق للكتابة )
--- onblur (عند الخروج من الحقل هنا تنتقل من الاون فوكس لل اون بلور)
--- onsubmit (عند ارسال المعلومات)
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};
window.onload = function () {
  alert("onload");
};