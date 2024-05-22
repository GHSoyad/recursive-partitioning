function split(e) {
  const parent = e.target.parentNode.parentNode;

  parent.innerHTML = `
  <div class='container' id='${parent.id}1'>
    <div class='button-container'>
      <button onclick="split(event)">V</button>
      <button onclick="split(event)">H</button>
    </div>
  </div>
  <div class='container' id='${parent.id}2'>
    <div class='button-container'>
      <button onclick="split(event)">V</button>
      <button onclick="split(event)">H</button>
    </div>
  </div>`
}

window.split = split;