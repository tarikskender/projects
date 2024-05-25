$(document).ready(function () {
  $(".close-btn").click(function () {
    $("#popup").addClass("hidden");
  });

  $(".button-19").click(function () {
    $("#popup").removeClass("hidden");

    const parent = $("#spapp");

    parent.find("section").each(function () {
      var pageToLoad = $(this).data("load");

      var app = $.spapp({
        defaultView: "#" + this.id,
        templateDir: "/views/",
        pageNotFound: "404.html",
        beforeLoad: function () {
          console.log(`Loading content for ${this.id} from ${pageToLoad}`);
        },
      });

      if (pageToLoad) {
        $(this).load(`/views/${pageToLoad}`, function (response, status, xhr) {
          if (status == "error") {
            console.log(`Error loading the page: ${xhr.statusText}`);
          } else {
            console.log(`Page loaded successfully: ${pageToLoad}`);
            app.run();
          }
        });
      }
    });
  });
});
