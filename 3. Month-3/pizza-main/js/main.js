let nonArr = [];
const elSelect = document.querySelector("#select");
const elNon = document.querySelector("#non");

elSelect.addEventListener("click", function (e) {
  e.preventDefault();

  if (elSelect.value.length > 0) {
    let newObj = {
      id: nonArr.length + 1,
      name: elSelect.value,
    };
    nonArr.push(newObj);
    console.log(nonArr);
    elNon.textContent = elSelect.value;
  }
});
const elSize = document.querySelectorAll(".size_pizza__label");
const elsize_javob = document.querySelector("#elsize_javob");

for (let item of elSize) {
  item.addEventListener("click", function () {
    elsize_javob.textContent = item.textContent;
  });
}
let elUstiga = document.querySelectorAll(".Ustiga_label");
let elUstiga_li = document.querySelector("#Elustiga_li");

for (let tag of elUstiga) {
  tag.addEventListener("click", function () {
    let li = document.createElement("li");
    li.append(tag.dataset.add);
    elUstiga_li.appendChild(li);
  });
}

let elQoshimcha = document.querySelectorAll(".qoshimcha_label");
let elQoshimcha_li = document.querySelector("#qoshimcha_label_li");

for (let item of elQoshimcha) {
  item.addEventListener("click", function (e) {
    console.log(e);
    let li = document.createElement("li");
    li.append(item.dataset.extra);

    elQoshimcha_li.appendChild(li);
  });
}
// input
input.oninput = function () {
  result.innerHTML = input.value;
};
numbers.oninput = function () {
  number.innerHTML = numbers.value;
};
emails.oninput = function () {
  emails.innerHTML = emails.value;
};



