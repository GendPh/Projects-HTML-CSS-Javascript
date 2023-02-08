let count = 0;
let countEl = document.getElementById("count-El");
countEl.textContent = count;
let saveEl = document.getElementById("save-el");

function insertData() {
  var insertDataEl = document.getElementById("directData").value;
  count = insertDataEl;
  countEl.textContent = insertDataEl;
}
function addCount() {
  count++;
  countEl.textContent = count;
}
function subtractCount() {
  if (count > 0) {
    count--;
    countEl.textContent = count;
  }
}
function save() {
  saveEl.textContent += count + "; ";
  count = 0;
  countEl.textContent = 0;
}
function clearCount() {
  count = 0;
  countEl.textContent = 0;
}
