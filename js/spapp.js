$("#posts-section").load("/views/post1.html", function (response, status, xhr) {
  if (status == "error") {
    console.log(`Error loading post1.html: ${xhr.statusText}`);
  } else {
    console.log("post1.html loaded successfully.");
  }
});

$(document).ready(function () {
  $("#homeLink").click(function (event) {
    event.preventDefault();
    window.location.href = "index.html#main-section";
  });
  $("#projectsLink").click(function (event) {
    event.preventDefault();
    window.location.href = "index.html#projects-section";
  });
  $("#navLink").click(function (event) {
    event.preventDefault();
    window.location.href = "index.html#nav-section";
  });
});

$(document).ready(function () {
  $(".close-btn").click(function () {
    $("#popup").addClass("hidden");
  });

  $(".button-19").click(function () {
    $("#popup").removeClass("hidden");

    const parent = $("#spapp");
    parent.find("section").each(function () {
      const pageToLoad = $(this).data("load");

      var app = $.spapp({
        defaultView: "#" + this.id,
        templateDir: "/views/",
        pageNotFound: "404.html",
        beforeLoad: function () {
          console.log(`Loading content for ${this.id} from ${pageToLoad}`);
        },
      });
      initializeEditAndDelete();

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

function initializeEditAndDelete() {
  $(document).ready(function () {
    $(document).on("click", ".edit-btn", function () {
      var $content = $(this).siblings(".content");
      var editableText = $("<textarea>").val($content.text());
      $content.replaceWith(editableText);
      editableText.focus();
    });
  });

  $(document).on("click", ".delete-btn", function () {
    if (confirm("Are you sure you want to delete this item?")) {
      $(this).parent().remove();
      showMessage("Item deleted successfully.");
    }
  });

  $(document).on("blur", "textarea", function () {
    var updatedText = $(this).val();
    var content = $("<div>").addClass("content").text(updatedText);
    $(this).replaceWith(content);
    showMessage("Item updated successfully.");
  });
}

function showMessage(message) {
  var messageDiv = $("<div>").addClass("message").text(message);
  $("body").append(messageDiv);
  setTimeout(function () {
    messageDiv.fadeOut();
  }, 3000);
}
