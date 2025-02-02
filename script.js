fetch('/options.json')
  .then(response => response.json())
  .then(data => {
    const html = createCheckboxList(data);
    document.getElementById('checkbox-list').innerHTML = html;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    let totalCost = 0;
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const priceElement = checkbox.parentNode.getElementsByClassName('price')[0];
        const price = priceElement.textContent;
        const priceValue = parseFloat(price.replace('$', '')); // преобразуем price в числовое значение
        if (checkbox.checked) {
          totalCost += priceValue;
        } else {
          totalCost -= priceValue;
        }
        document.getElementById('totalPrice').innerText = `$${totalCost.toFixed(2)} ${'total price'}`;
      });
    });
  })
  .catch(error => console.error(error));

function createCheckboxList(data) {
  const { models, exterior, interior, accessories } = data.carOptions;

  const modelList = models.map(model => `
    <div id='divContainer'>
      <label>
        <input type="checkbox" name="model" value="${model.name}">
        ${model.name}${'------'}
        <span class="price">${model.basePrice}${'$'}</span>
      </label>
    </div>
    `
  )

  const colorList = exterior.colors.map(color => `
  <div id='divContainer'>  
    <label>
      <input type="checkbox" name="model" value="${color.name}">
      ${color.name}${'------'}
      <span class="price">${color.price}${'$'}</span>
    </label>
  </div>
    `
  )

  const wheelsList = exterior.wheels.map(whell => `
  <div id='divContainer'>  
    <label>
      <input type="checkbox" name="model" value="${whell.name}">
      ${whell.name}${'------'}
      <span class="price">${whell.price}${'$'}</span>
    </label>
  </div>
 
    `
  )

  const sunroofList = exterior.sunroof.map(sunroof => `
  <div id='divContainer'>  
    <label>
      <input type="checkbox" name="model" value="${sunroof.name}">
      ${sunroof.name}${'------'}
      <span class="price">${sunroof.price}${'$'}</span>
    </label>
  </div>

    `
  )


  const upholsteryList = interior.upholstery.map(upholstery => `
  <div id='divContainer'>  
    <label>
      <input type="checkbox" name="model" value="${upholstery.name}">
      ${upholstery.name}${'------'}
      <span class="price">${upholstery.price}${'$'}</span>
    </label>
  </div>

    `
  )

  const infotainmentList = interior.infotainment.map(infotainment => `
  <div id='divContainer'>  
    <label>
      <input type="checkbox" name="model" value="${infotainment.name}">
      ${infotainment.name}${'------'}
      <span class="price">${infotainment.price}${'$'}</span>
    </label>
  </div>
    `
  )

  const accessoriesList = accessories.map(accessories => `
  <div id='divContainer'>  
    <label>
      <input type="checkbox" name="model" value="${accessories.name}">
      ${accessories.name}${'------'}
      <span class="price">${accessories.price}${'$'}</span>
    </label>
  </div>
    `
  )


  return `
      <h1>Models</h1>
    <ul>${modelList.join('')}</ul>
      <h1>exterior</h1>
      <h2>colors</h2>
    <ul>${colorList.join('')}</ul>
      <h2>wheels</h2>
    <ul>${wheelsList.join('')}</ul>
      <h2>sunroof</h2>
    <ul>${sunroofList.join('')}</ul>
      <h1>interior</h1>
      <h2>upholstery</h2>
    <ul>${upholsteryList.join('')}</ul>
      <h2>infotainment</h2>
    <ul>${infotainmentList.join('')}</ul>
      <h1>accessories</h1>
    <ul>${accessoriesList.join('')}</ul>
    `
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let totalCost = 0;
checkboxes.forEach(checkbox => {
  const priceElement = checkbox.parentNode.getElementsByClassName('price')[0];
  const price = priceElement.textContent;
  if (checkbox.checked) {
    totalCost += priceValue;
  } else {
    totalCost -= priceValue;
  }

  console.log(`Общая стоимость: $${totalCost.toFixed(2)}`);});
