// access the box click
let count = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    const titleHolder = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = count + "." + title;
    titleHolder.appendChild(p);
    count++;
    const totalPriceHolder = document.getElementById("totalPrice");
    totalPrice += price;
    totalPriceHolder.innerText = totalPrice.toFixed(2);
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const inputCupon = document.getElementById("input-field").value.toUpperCase();
  const displayDiscount = document.getElementById("discountPrice");
  const displayTotal = document.getElementById("total");
  if (totalPrice >= 200) {
    if (inputCupon === "SELL200") {
      const discountValue = totalPrice * 0.2;
      const discountPrice = discountValue.toFixed(2);
      displayDiscount.innerText = discountPrice;
      displayTotal.innerText = (totalPrice - discountPrice).toFixed(2);
    } else alert("invalid cupon");
  } else alert("Purchase up to 200");
});
