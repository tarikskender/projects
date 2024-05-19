$(document).ready(function () {
  $(".button-19").click(function () {
    $("#popup").removeClass("hidden");
    var app = $.spapp({
      defaultView: "#page1",
      templateDir: "./views/",
    });
    app.run();
  });
});
