
fetch('/options.json')
  .then(response => response.json())
  .then(data => {
    const optionData = document.getElementById('option');
    optionData.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error(error));
