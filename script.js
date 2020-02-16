document.getElementById('generate').addEventListener('click', (e) => {
  e.preventDefault()
  let first = parseInt(document.getElementById('first-number-range').value)
  let second = parseInt(document.getElementById('second-number-range').value)
  if(first && second && first <= second){
    fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16')
      .then(r => r.json())
      .then(res => {
        let randomNumRaw = res.data[0]
        let gap = second - first + 1
        console.log(randomNumRaw, gap)
        document.getElementById('result').textContent = (randomNumRaw % gap) + first
      })
  }
  
})