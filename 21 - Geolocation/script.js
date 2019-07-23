const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  data => {
    speed.textContent = data.coords.speed;
    arrow.getElementsByClassName.transform = `rotate(${
      data.coords.heading
    }deg)`;
  },
  err => {
    console.log(err);
    alert('Allow access in order to run');
  }
);
