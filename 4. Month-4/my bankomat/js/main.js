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
// rednerHis()
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

function calculate(type) {
  let obj = data.find((item) => item.Ccy == select.value);
  let date = new Date();
  // console.log(date);
  let hisobj = {
    id: history[history.length - 1]?.id + 1 || 0,
    from: null,
    to: null,
    date: `${date.getDate > 10 ? date.getDate() : date.getDate()}:${
      date.getMonth() + 1
    }:${date.getFullYear()}`,
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
      history.push(hisobj);
      localStorage.setItem("history", JSON.stringify(hisobj));

    case "*":
      formcCcy.value = (toCcy.value * obj.Rate).toFixed(1);
      hisobj.from = "UZS";
      hisobj.to = obj.Ccy;
      hisobj.fromN = toCcy.value;
      hisobj.toN = formcCcy.value;
      history.push(hisobj);
      localStorage.setItem("history", JSON.stringify(hisobj));
  }

  console.log(history);
  rednerHis();
}
function rednerHis() {
  hisEl.innerHTML = "";
  history.forEach((item) => {
    const temp = `
      <div class="card mt-5 w-50 m-auto">
            <div class="card-header d-flex justify-content-between">
              <h5>${item.to}=>${item.from}</h5>
              <span>${item.date}</span>
            </div>
            <div class="card-body d-flex justify-content-between">
              <h3>${item.fromN}=>${item.toN}</h3>
              <button type="button" onclick="delete(id)" class="btn btn-danger">Delete</button>
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
  console.log("salom");
  console.log(lan.value);
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
