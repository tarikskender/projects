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

  populateTable(employees); // Initially populate table
});
