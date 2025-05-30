// Create floating balloons
for (let i = 0; i < 15; i++) {
  let b = document.createElement('div');
  b.classList.add('balloon');
  b.style.left = Math.random() * 100 + 'vw';
  b.style.background = ['#ff6f91', '#ff9671', '#ffc75f'][Math.floor(Math.random() * 3)];
  b.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(b);
}

function showSorry() {
  document.body.innerHTML = `
    <h1>“Shanaya, dil se sorry… <br> Pawan ki taraf se…”</h1>
    <img src="shanaya.jpg" alt="Shanaya">
    <button class="button" onclick="showFinal()">Click for Surprise</button>
  `;
}

function showFinal() {
  document.body.innerHTML = `
    <h1>“Shanaya, tum meri zindagi ka khubsurat ehsaas ho, <br> tumhari hasi meri jaan hai…”</h1>
    <img src="shanaya.jpg" alt="Shanaya">
    <p>Jab tak tumhare saath ho, har din ek nayi khushi laata hai. 💕<br>Pawan</p>
  `;
}
