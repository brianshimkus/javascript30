const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

NavigationPreloadManager.geolocation.watchPosition(data => {
  speed.textContent = data.coords.speed;
  arrow.getElementsByClassName.transform = `rotate(${data.coords.heading}deg)`;
});
