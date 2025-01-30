fetch('/options.json')
  .then(response => response.json())
  .then(data => {
    console.log('Данные получены:');
    console.log(data);
    const html = createCheckboxList(data);
    document.getElementById('checkbox-list').innerHTML = html;

  })
  .catch(error => console.error(error));

function createCheckboxList(data) {
  const { models, exterior, interior, accessories } = data.carOptions;

  const modelList = models.map(model => `
    <label>
      <input type="checkbox" name="model" value="${model.name}">
      ${model.name}
      <span class="price">${model.basePrice}</span>
    </label>
    `
  )

  const colorList = exterior.colors.map(color => `
    <label>
      <input type="checkbox" name="model" value="${color.name}">
      ${color.name}
      <span class="price">${color.basePrice}</span>
    </label>
    `
  )

  const wheelsList = exterior.wheels.map(whell => `
    <label>
      <input type="checkbox" name="model" value="${whell.name}">
      ${whell.name}
      <span class="price">${whell.basePrice}</span>
    </label>
    `
  )

  const sunroofList = exterior.sunroof.map(sunroof => `
    <label>
      <input type="checkbox" name="model" value="${sunroof.name}">
      ${sunroof.name}
      <span class="price">${sunroof.basePrice}</span>
    </label>
    `
  )


  const upholsteryList = interior.upholstery.map(upholstery => `
    <label>
      <input type="checkbox" name="model" value="${upholstery.name}">
      ${upholstery.name}
      <span class="price">${upholstery.basePrice}</span>
    </label>
    `
  )

  const infotainmentList = interior.infotainment.map(infotainment => `
    <label>
      <input type="checkbox" name="model" value="${infotainment.name}">
      ${infotainment.name}
      <span class="price">${infotainment.basePrice}</span>
    </label>
    `
  )

  const accessoriesList = accessories.map(accessories => `
    <label>
      <input type="checkbox" name="model" value="${accessories.name}">
      ${accessories.name}
      <span class="price">${accessories.basePrice}</span>
    </label>
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
