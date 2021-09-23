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

headers.forEach((headerText) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
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

function filtering() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("text-tab");
  console.log(input);
  filter = input.value.toUpperCase();
  table = document.getElementById("my-table");
  console.log(table);
  tr = table.getElementsByTagName("tr");
  console.log(tr);

  for (i = 0; tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
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
