const API = "cab3f5f175fbdabe4b5af960";
const URL = `https://v6.exchangerate-api.com/v6/${API}/latest`;
const currencyAvailable = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SLL",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL",
];
// PRINT CURRENCY OPTIONS
function printCurrencyOptions(arr, element) {
  arr.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.innerText = currency;
    element.append(option);
  });
}
function getDate(milliSeconds) {
  const date = new Date(milliSeconds);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = dayNames[date.getDay()];
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${dayName}, ${day} ${monthName} ${year}`;
  return formattedDate;
}

// ELEMENTS
const fromDropDownSelect = document.querySelector("#from-select-amount");
const toDropDownSelect = document.querySelector("#to-select-amount");
const currencyResult = document.querySelector(".converted-result");
const convertButton = document.querySelector(".convert-btn");
const amount = document.querySelector("#amount");
const card = document.querySelector(".card-body");
const lastUpdatedTime = document.createElement("p");
// FUNCTIONALITY START
printCurrencyOptions(currencyAvailable, fromDropDownSelect);
printCurrencyOptions(currencyAvailable, toDropDownSelect);

// SETTING DEFAULT DROPDOWN VALUES
fromDropDownSelect.value = "USD";
toDropDownSelect.value = "BDT";

function currencyConverter() {
  const convertFromValue = fromDropDownSelect.value;
  fetch(`${URL}/${convertFromValue}`)
    .then((response) => response.json())
    .then((data) => printResult(data));

  function printResult(data) {
    const convertAmount = Number(amount.value);
    const convertToValue = toDropDownSelect.value;
    const convertedAmount =
      convertAmount * Number(data.conversion_rates[convertToValue]).toFixed(2);
    currencyResult.innerText = `${convertAmount} ${convertFromValue} = ${convertedAmount} ${convertToValue}`;
    const getTime = getDate(data.time_last_update_unix * 1000);

    lastUpdatedTime.className =
      "text-center text-sm-end fw-bold fst-italic fs-6";
    lastUpdatedTime.innerText = `Last Updated: ${getTime}`;
    if (!lastUpdatedTime.isConnected) card.append(lastUpdatedTime);
  }
}
convertButton.addEventListener("click", currencyConverter);
