/**
 * This method smooth the scrooling when a link is clicked
 *
 */
function scrollSmooth(info) {
  var offset = document.querySelector("#" + info).offsetTop;

  scroll({
    top: offset - 100,
    behavior: "smooth",
  });
}

/**
 * Create and store information in json
 */
const myInfo = document.querySelector("#my-info");

let h1 = document.createElement("h1");
h1.textContent = "Willikins Matheus Gonçalves Abreu";
myInfo.appendChild(h1);

let h4 = document.createElement("h4");
h4.innerHTML =
  "<em>Hello my name is Willikins, i'm 21 year old and i was born in Florestopolis - PR</em>";
myInfo.appendChild(h4);

/**
 * Create table and populate with the data
 */
let myTable = document.querySelector("#my-data");
let tableData = [
  { name: "Oto Patama", category: "Música", releaseYear: 2020 },
  { name: "The Office", category: "Série", releaseYear: 2005 },
  { name: "The Witcher 3", category: "Jogo", releaseYear: 2015 },
  { name: "Final Fantasy XV", category: "Jogo", releaseYear: 2016 },
  { name: "Fullmetal Alchmist", category: "Anime", releaseYear: 2009 },
  { name: "Closed On Sunday", category: "Música", releaseYear: 2019 },
  { name: "Preacher", category: "Série", releaseYear: 2016 },
];

let headers = ["Name", "Category", "Release Year"];
let table = document.createElement("table");
table.className = "table table-striped table-bordered table-hover ms-auto";
table.id = "my-table";
let tHead = document.createElement("thead");
tHead.className = "table-dark";
let headerRow = document.createElement("tr");

let tBody = document.createElement("tbody");
let icoDown = document.createElement("i");
icoDown.className = "bi bi-arrow-down-short";
let icoUp = document.createElement("i");
icoUp.className = "bi bi-arrow-up-short";
//var i = 0;
//headers.forEach((headerText) => {
// let header = document.createElement("th");
//header.setAttribute("onclick","sortTable("+i+")");
//let textNode = document.createTextNode(headerText);
// header.appendChild(textNode);
// header.insertAdjacentElement("beforeend",ico);
// headerRow.appendChild(header);
//  i++;
//});
for (var i = 0; i < headers.length; i++) {
  let header = document.createElement("th");
  header.setAttribute("onclick", "sortTable(" + i + ")");
  header.id = "my" + i + "header";
  let textNode = document.createTextNode(headers[i]);
  header.appendChild(textNode);
  headerRow.appendChild(header);
}

tHead.appendChild(headerRow);
table.appendChild(tHead);

tableData.forEach((emp) => {
  let row = document.createElement("tr");
  Object.values(emp).forEach((text) => {
    let cell = document.createElement("td");
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });
  tBody.appendChild(row);
  table.appendChild(tBody);
});
myTable.appendChild(table);

/**
 * filtering de dados na tabela
 */
function filtering() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("text-tab");
  filter = input.value.toUpperCase();
  table = document.getElementById("my-table");
  tr = table.getElementsByTagName("tr");
  var select = document.getElementById("options").selectedIndex;

  for (i = 0; tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[select];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("my-table");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }

    switchIcon(n, dir);
  }

  function switchIcon(n, dir) {
    if (dir === "asc") {
      var header = document.getElementById("my" + n + "header");
      if (header.children[0] != undefined) {
        header.children[0].remove();
      }
      header.appendChild(icoDown);
    }  if (dir === "desc") {
      var header = document.getElementById("my" + n + "header");
      if (header.children[0] != undefined) {
        header.children[0].remove();
      }
      header.appendChild(icoUp);
    }
  }
}
