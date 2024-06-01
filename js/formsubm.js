var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        let toast = document.getElementById("toast");
        toast.className = "toast show";
        setTimeout(function () {
          toast.className = toast.className.replace("show", "");
        }, 3000);
      }
    };

    let object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    xhr.send(JSON.stringify(object));
  });
