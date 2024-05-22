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
    <button class='remove' onclick='removeContainer(event)'>-</button>
    <div class='button-container'>
      <button onclick="split(event)">V</button>
      <button onclick="split(event)">H</button>
    </div>
  </div>
  <div class='container' id='${parent.id}2' style='background-color: ${newBackgroundColor};'>
    <button class='remove' onclick='removeContainer(event)'>-</button>
    <div class='button-container'>
      <button onclick="split(event)">V</button>
      <button onclick="split(event)">H</button>
    </div>
  </div>`

  if (e.target.innerText === "H") {
    parent.style.flexDirection = 'column';
  }
}


function removeContainer(e) {
  const container = e.target.closest('.container');
  container.remove();

  const containers = document.querySelectorAll('.container');
  // Check all containers in reverse and remove container without child
  for (i = containers.length - 1; i >= 0; i--) {
    const element = containers[i];
    if (element.children.length === 0) {
      element.remove();
    }
  }

  // Reset to initial state after all containers are removed
  if (document.querySelectorAll('.button-container').length === 0) {
    document.body.innerHTML = `
      <div class='container' id='1'>
        <div class='button-container'>
          <button onclick="split(event)">V</button>
          <button onclick="split(event)">H</button>
        </div>
      </div>`
  }
}