const setDate = () => {
  const todayDate = new Date();
  const { hour, minutes, second, period } = FormatDate(todayDate);

  document.querySelector(".hour").textContent = hour;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".second").textContent = second;
  document.querySelector(".period").textContent = period;

  document.querySelector(".day").textContent = FormatDay(todayDate);
};

const FormatDate = (todayDate) => {
  let hour = todayDate.getHours();
  let minutes = todayDate.getMinutes();
  let second = todayDate.getSeconds();

  const period = hour >= 12 ? "PM" : "AM";

  hour = hour > 12 ? hour % 12 : hour;
  hour = hour < 10 ? `0${hour}` : hour;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  second = second < 10 ? `0${second}` : second;

  return { hour, minutes, second, period };
};

const FormatDay = (todayDate) => {
  let day = todayDate.toLocaleString("default", { weekday: "short" });
  let date = todayDate.getDate();
  let month = todayDate.toLocaleString("default", { month: "short" });
  let year = todayDate.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

setDate();
setInterval(setDate, 1000);
console.log("tets");
