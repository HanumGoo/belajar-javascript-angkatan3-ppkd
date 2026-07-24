const weight = document.getElementById("content-weight");
const city = document.getElementById("content-city");
const outcity = document.getElementById("content-outcity");
const button = document.getElementById("content-button");
const resulter = document.getElementById("content-result");
const allOutcity = document.querySelectorAll(".optional-outcity");

const weightChange = document.getElementById("content-weightChange");

button.addEventListener("click", () => {
  if (city.value == "none") {
    alert("pilih kota dulu");
  } else if (city.value == "bogor") {
    let weightContent;
    if (weightChange.value == "gr") {
      weightContent = weight.value / 1000;
    } else if (weightChange.value == "kg") {
      weightContent = weight.value;
    }
    const pricePerKG = 2000;
    const total = weightContent * pricePerKG;
    resulter.innerHTML = "Total Biaya : IDR " + total.toLocaleString("en-ID");
  } else if (city.value == "depok") {
    let weightContent;
    if (weightChange.value == "gr") {
      weightContent = weight.value / 1000;
    } else if (weightChange.value == "kg") {
      weightContent = weight.value;
    }
    const pricePerKG = 4000;
    const total = weightContent * pricePerKG;
    resulter.innerHTML = "Total Biaya : IDR " + total.toLocaleString("en-ID");
  } else if (city.value == "other") {
    if (outcity.value == "") {
      alert("minimal masukin kota dulu");
      return;
    }
    let weightContent;
    if (weightChange.value == "gr") {
      weightContent = weight.value / 1000;
    } else if (weightChange.value == "kg") {
      weightContent = weight.value;
    }
    const pricePerKG = 6000;
    const total = weightContent * pricePerKG;
    resulter.innerHTML = "Total Biaya : IDR " + total.toLocaleString("en-ID");
  }
});

city.addEventListener("change", () => {
  if (city.value == "other") {
    const outcityArray = Array.from(allOutcity);
    outcityArray.forEach((item, index) => {
      item.style.display = "inline";
    });
  } else {
    const outcityArray = Array.from(allOutcity);
    outcityArray.forEach((item, index) => {
      item.style.display = "none";
    });
  }
});
