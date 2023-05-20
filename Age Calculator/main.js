//////////////////////////////////////
//  MOVE YEAR MONTH DAY JAVASCRIPT CODE
//////////////////////////////////////
const goRight = (obj) => {
  console.log(obj.attributes.id.value);
  let _value = obj.attributes.id.value;
  if (_value == "year") {
    // let display_name = (document.getElementById(
    //   _value
    // ).parentElement.parentElement.style.display = "none");
    // console.log(display_name);
    document.getElementsByClassName("year")[0].style.display = "none";
    document.getElementsByClassName("month")[0].style.display = "block";
  } else if (_value == "month") {
    document.getElementsByClassName("month")[0].style.display = "none";
    document.getElementsByClassName("day")[0].style.display = "block";
  } else if (_value == "day") {
    document.getElementsByClassName("day")[0].style.display = "none";
    document.getElementsByClassName(
      whoDate
    ).innerHTML = `${day}/${month}/${year}`;
    console.log("this work ar not");
  }
};
const goLeft = (obj) => {
  let _value = obj.attributes.id.value;
  if (_value == "dayL") {
    // let display_name = (document.getElementById(
    //   _value
    // ).parentElement.parentElement.style.display = "none");
    // console.log(display_name);
    document.getElementsByClassName("day")[0].style.display = "none";
    document.getElementsByClassName("month")[0].style.display = "block";
  } else if (_value == "monthL") {
    document.getElementsByClassName("month")[0].style.display = "none";
    document.getElementsByClassName("year")[0].style.display = "block";
  }
};
// daynamic year add
const daynamicYearAdd = () => {
  let year_html_code = ``;
  let year = new  Date();
  year = year.getFullYear();
  for (let i = 0; i < 100; i++) {
    year_html_code += `<div onclick="getYear(this)" class="year-sinlge">${year}</div>`;
    year--;
  }
  console.log(year_html_code);

  document.getElementsByClassName("year-wrap")[0].innerHTML = year_html_code;
};
daynamicYearAdd();
// daynamic day add
const daynamicDayAdd = () => {
  let day_html_code = ``;
  for (let i = 1; i <= 31; i++) {
    day_html_code += `<div onclick="getDay(this)" class="year-sinlge">${i}</div>`;
  }

  document.getElementsByClassName("day-wrap")[0].innerHTML = day_html_code;
};
daynamicDayAdd();

let year = 0;
let month;
let day;
let whoDate;
const getYear = (obj) => {
  year = obj.innerHTML;
  document.getElementsByClassName("year")[0].style.display = "none";
  document.getElementsByClassName("month")[0].style.display = "block";
  console.log(year);
};
const getMonth = (obj) => {
  month = obj.innerHTML;
  document.getElementsByClassName("month")[0].style.display = "none";
  document.getElementsByClassName("day")[0].style.display = "block";
  console.log(month);
};
const getDay = (obj) => {
  day = obj.innerHTML;
  document.getElementsByClassName("day")[0].style.display = "none";
  document.getElementsByClassName(
    whoDate
  )[0].innerHTML = `${day} / ${month} / ${year}`;
  console.log(day);
};

const popUpOpen = (obj) => {
  document.getElementsByClassName("year")[0].style.display = "block";
  whoDate = obj.parentElement.children[0].className;
  console.log(whoDate);
};

//////////////////////////////
//  CALCULATE AGE
//////////////////////////////

const calAge = () => {
  let startDate = document.getElementsByClassName("start-date")[0].innerHTML;
  let endDate = document.getElementsByClassName("end-date")[0].innerHTML;
  console.log(endDate);
  const regEx1 = /\d+/g;
  const regEx2 = /[a-zA-Z]+/g;
  let todayDate = startDate.match(regEx1);
  let todayDay = parseInt(todayDate[0]);
  let todayYear = parseInt(todayDate[1]);
  let todayDatee = startDate.match(regEx2);
  let todayMonth = todayDatee[0];

  // birth date start code
  let birthDate = endDate.match(regEx1);
  console.log(birthDate);
  let birthDay = parseInt(birthDate[0]);
  let birthYear = parseInt(birthDate[1]);
  birthDate = endDate.match(regEx2);
  let birthMonth = birthDate[0];

  console.log(birthMonth);

  let months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agu",
    "Sep",
    "Oct",
    "Nob",
    "Dec",
  ];

  for (let i = 0; i < months.length; i++) {
    if (months[i] == todayMonth) {
      todayMonth = i + 1;
    }
  }
  for (let i = 0; i < months.length; i++) {
    if (months[i] == birthMonth) {
      birthMonth = i + 1;
    }
  }

  console.log(todayDay, todayMonth, todayYear, birthDay, birthMonth, birthYear);
  let day = 0;
  let month = 0;
  let year = 0;
  let monthCount = 0;
  let yearCount = 0;
  if (todayDay < birthDay) {
    if (todayMonth % 2 == 1 || todayMonth == 8) {
      day = todayDay + 31 - birthDay;
    } else {
      day = todayDay + 30 - birthDay;
    }
    monthCount++;
  } else {
    day = todayDay - birthDay;
  }
  todayMonth -= monthCount;
  if (todayMonth < birthMonth) {
    month = 12 + todayMonth - birthMonth;
    yearCount++;
  } else {
    month = todayMonth - birthMonth;
  }

  todayYear -= yearCount;
  year = todayYear - birthYear;

  let output = (document.getElementsByClassName(
    "youAge"
  )[0].innerHTML = `Age: ${year} years ${month} months ${day} day old.`);
};
