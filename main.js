function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function split(e) {
  const parent = e.target.parentNode.parentNode;
  const parentStyle = window.getComputedStyle(parent);

  const parentBackgroundColor = parentStyle.backgroundColor;
  const newBackgroundColor = getRandomColor();

  parent.innerHTML = `
  <div class='container' id='${parent.id}1' style='background-color: ${parentBackgroundColor};'>
    <div class='button-container'>
      <button onclick="split(event)">V</button>
      <button onclick="split(event)">H</button>
    </div>
  </div>
  <div class='container' id='${parent.id}2' style='background-color: ${newBackgroundColor};'>
    <div class='button-container'>
      <button onclick="split(event)">V</button>
      <button onclick="split(event)">H</button>
    </div>
  </div>`

  if (e.target.innerText === "H") {
    parent.style.flexDirection = 'column';
  }
}

window.split = split;