const { Builder, By } = require('selenium-webdriver');

/* test('should show the number 1 in the line item when users add just 1 item', async () => {
  // arrange  / given / precondicion
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://arnab-datta.github.io/counter-app/');

  // act / when / accion
  const plus_button = await driver.findElement(By.className('fa-plus-circle'));
  await plus_button.click();

  // assert / asercion / verificacion
  const firstLineCounterElement = await driver.findElement(
    By.className('badge')
  );
  const firstLineCounterValue = await firstLineCounterElement.getText();

  expect(firstLineCounterValue).toBe('1');

  await driver.quit();
}); */

test('should show the number 1 in the upper box next to the cart when users add just 1 item', async () => {
  // arrange  / given / precondicion
  let driver = await new Builder().forBrowser('firefox').build();
  await driver.get('https://arnab-datta.github.io/counter-app/');

  // act / when / accion
  const plus_button = await driver.findElement(By.className('fa-plus-circle'));
  await plus_button.click();

  // assert / asercion / verificacion
  const cartCounter = await driver.findElement(By.className('badge-info'));
  const cartCounterValue = await cartCounter.getText();

  expect(cartCounterValue).toBe('1');

  await driver.quit();
}, 10000);
