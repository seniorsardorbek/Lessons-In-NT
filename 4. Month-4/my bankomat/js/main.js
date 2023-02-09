function $(sel) {
  return document.querySelector(sel);
}

let formcCcy = $("#formcCcy");
let toCcy = $("#toCcy");
let select = $(".form-select");
let hisEl = $(".history");
let lan = $(".form-selectt");
let data = null;
let history = JSON.parse(localStorage.getItem("history")) || [];
rednerHis();

let getAPI = new Promise((res, rej) => {
  fetch("http://xolisnazar.uz/api/index/currency")
    .then((res) => res.json())
    .then((data) => res(data))
    .catch((err) => rej(err));
}).then((res) => {
  data = res.currencyData;
  console.log(data);
  langu();
});
let obj = null;

select.addEventListener("change", function () {
  console.log(this.value);
});

formcCcy.addEventListener("change", (e) => {
  calculate("/");
});
toCcy.addEventListener("change", (e) => {
  calculate("*");

  console.log(history);
});

// calculate
function calculate(type) {
  let obj = data.find((item) => item.Ccy == select.value);
  let hisobj = {
    id: history[history.length - 1]?.id + 1 || 0,
    from: null,
    to: null,
    date: getTime(),
    fromN: null,
    toN: null,
  };

  switch (type) {
    case "/":
      toCcy.value = (formcCcy.value / obj.Rate).toFixed(1);
      hisobj.from = obj.Ccy;
      hisobj.to = "UZS";
      hisobj.fromN = formcCcy.value;
      hisobj.toN = (formcCcy.value / obj.Rate).toFixed(1);
      history.unshift(hisobj);
      localStorage.setItem("history", JSON.stringify(history));

    case "*":
      formcCcy.value = (toCcy.value * obj.Rate).toFixed(1);
      hisobj.from = "UZS";
      hisobj.to = obj.Ccy;
      hisobj.fromN = toCcy.value;
      hisobj.toN = formcCcy.value;
      history.unshift(hisobj);
      localStorage.setItem("history", JSON.stringify(history));
  }
  rednerHis();
}
function rednerHis() {
  hisEl.innerHTML = "";
  history.forEach((item) => {
    const temp = `
      <div class="card mt-5 w-50 m-auto">
            <div class="card-header d-flex justify-content-between">
              <h5>${item.to}=>${item.from}</h5>
              <span>${getTime()}</span>
            </div>
            <div class="card-body d-flex justify-content-between">
              <h3>${item.fromN}=>${item.toN}</h3>
              <button type="button" onclick="deletefc(${
                item.id
              })" class="btn btn-danger">Delete</button>
            </div>
          </div>
      `;
    hisEl.innerHTML += temp;
  });
}

lan.addEventListener("change", () => {
  langu();
});
function langu() {
  switch (lan.value) {
    case "EN":
      select.innerHTML = "";
      data.forEach((el) => {
        const temp = `
                   <option value="${el.Ccy}">${el.CcyNm_EN}</option>
                   `;
        select.innerHTML += temp;
      });
      break;
    case "RU":
      select.innerHTML = "";
      data.forEach((el) => {
        const temp = `
                   <option value="${el.Ccy}">${el.CcyNm_RU}</option>
                   `;
        select.innerHTML += temp;
      });
      break;
    case "UZ":
      select.innerHTML = "";
      data.forEach((el) => {
        const temp = `
                   <option value="${el.Ccy}">${el.CcyNm_UZ}</option>
                   `;
        select.innerHTML += temp;
      });
  }
}

function deletefc(id) {
  history.splice(
    history.findIndex(
      (item) => item === history.find((fitem) => fitem.id === id)
    ),
    1
  );
  rednerHis();
  localStorage.setItem("history", JSON.stringify(history));
}

function getTime() {
  const now = new Date();
  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month =
    now.getMonth() < 10 ? "0" + (now.getMonth() + 1) : now.getMonth();
  const year = now.getFullYear();

  const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const second =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

  return `${hour}:${minute}, ${date}.${month}.${year}`;
}
