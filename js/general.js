$(document).ready(function () {
  const employees = [
    {
      name: "Harun Skender",
      position: "CEO",
      office: "Sarajevo",
      age: "26",
      startDate: "2021/06/03",
      salary: "$1200",
    },
    {
      name: "Tarik Skender",
      position: "Developer",
      office: "Sarajevo",
      age: "20",
      startDate: "2022/06/03",
      salary: "$1200",
    },
    {
      name: "Edin Starcevic",
      position: "Project Manager",
      office: "Sarajevo",
      age: "27",
      startDate: "2022/06/03",
      salary: "$1200",
    },
    {
      name: "Aldin Kulaglic",
      position: "Developer",
      office: "Sarajevo",
      age: "23",
      startDate: "2023/06/03",
      salary: "$1200",
    },
    {
      name: "Samir Hajdarevic",
      position: "Developer",
      office: "Sarajevo",
      age: "27",
      startDate: "2024/04/01",
      salary: "$1200",
    },
  ];

  function populateTable(data) {
    const tableBody = $("#employeesTable tbody");
    tableBody.empty();
    data.forEach((emp) => {
      const row = `<tr>
                <td class="employee-name" data-bs-toggle="modal" data-bs-target="#employeeModal">${emp.name}</td>
                <td>${emp.position}</td>
                <td>${emp.office}</td>
                <td>${emp.age}</td>
                <td>${emp.startDate}</td>
                <td>${emp.salary}</td>
            </tr>`;
      tableBody.append(row);
    });
  }

  function sortTable(column, ascending = true) {
    employees.sort((a, b) => {
      if (a[column] < b[column]) return ascending ? -1 : 1;
      if (a[column] > b[column]) return ascending ? 1 : -1;
      return 0;
    });
    populateTable(employees);
  }

  $("th").click(function () {
    const column = $(this).index();
    const ascending = $(this)
      .children('.sort-icon[data-sort="asc"]')
      .is(":visible");
    sortTable(column, !ascending);
    $(this).children(".sort-icon").toggle();
  });

  $("#searchInput").on("input", function () {
    const searchText = $(this).val().toLowerCase();
    const filteredData = employees.filter((emp) =>
      emp.name.toLowerCase().includes(searchText)
    );
    populateTable(filteredData);
  });

  $(document).on("click", ".employee-name", function () {
    const name = $(this).text();
    const employee = employees.find((emp) => emp.name === name);
    const details = `<p>Name: ${employee.name}</p><p>Position: ${employee.position}</p>`;
    $(".modal-body").html(details);
  });

  populateTable(employees);
});

const themeSelect = document.getElementById("theme-select");

// toggle funkcija

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

themeSelect.addEventListener("change", function () {
  if (this.value === "dark") {
    toggleDarkMode();
  } else {
    toggleDarkMode();
  }
});

// funkcija za sakrivanje i pokazivanje contenta

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

var accordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var block = this.nextElementSibling;
    if (block.style.display === "block") {
      block.style.display = "none";
    } else {
      block.style.display = "block";
    }
  });
}

document.getElementById("password").addEventListener("input", function () {
  const strengthIndicator = document.getElementById("password-strength");
  const password = this.value;
  let strength = 0;

  if (password.match(/[a-z]/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }
  if (password.match(/[0-9]/)) {
    strength += 1;
  }
  if (password.match(/[$@#!%*?&]/)) {
    strength += 1;
  }

  strengthIndicator.style.width = strength * 25 + "%";

  if (strength === 0) {
    strengthIndicator.className = "";
    strengthIndicator.style.width = "0%";
  } else if (strength === 1) {
    strengthIndicator.className = "strength-weak";
  } else if (strength === 2) {
    strengthIndicator.className = "strength-medium";
  } else if (strength >= 3) {
    strengthIndicator.className = "strength-strong";
  }
});
