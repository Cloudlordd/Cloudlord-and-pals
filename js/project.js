let body = document.getElementById('body')

function checkBack() {
  body.innerHTML += `
    
    <div class="wrapper">
  <div class="card">
    <h1>
      <span class="enclosed">Check</span>Back
    </h1>
   
    <a href="../index.html">Go🔙</a>
  </div>
  
</div>
    `
}

window.onload = checkBack()
