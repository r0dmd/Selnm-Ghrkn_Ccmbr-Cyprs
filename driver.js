import { Builder, By } from 'selenium-webdriver';

const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const example = async () => {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://arnab-datta.github.io/counter-app/');

    // Ejercicio 1 (solo primera parte hecha)
    const zero = await driver.findElement(By.className('badge'));
    console.log(await zero.getRect());

    // Ejercicio 2
    const primerSignoPlus = (
      await driver.findElements(By.className('fa-plus-circle'))
    )[0];
    await driver
      .actions()
      .move({ origin: primerSignoPlus })
      .pause(1000)
      .click()
      .pause(1000)
      .click()
      .pause(1000)
      .click()
      .pause(1000)
      .click()
      .pause(1000)
      .perform();

    await sleepNow(10000);
  } finally {
    await driver.quit();
  }
};

example();
