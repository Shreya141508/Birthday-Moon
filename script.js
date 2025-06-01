function showMoon() {
  const date = new Date(document.getElementById("birthdate").value);
  if (!date.getTime()) return alert("Please enter a valid date.");

  const moonPhases = [
    "New Moon", "Waxing Crescent", "First Quarter",
    "Waxing Gibbous", "Full Moon", "Waning Gibbous",
    "Last Quarter", "Waning Crescent"
  ];

  const day = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24));
  const synodicMonth = 29.53;
  const phaseIndex = Math.floor((day % synodicMonth) / (synodicMonth / 8));

  const moonText = moonPhases[phaseIndex];
  const moonImgSrc = `images/moon_${phaseIndex}.png`; 

  document.getElementById("moonInfo").innerHTML = `
    Your moon phase was:<br>
    <strong>${moonText}</strong><br>
    <img src="${moonImgSrc}" alt="${moonText}" class="moon-image">
  `;
}

