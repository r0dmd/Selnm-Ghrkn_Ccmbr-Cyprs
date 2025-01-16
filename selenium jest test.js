const { Builder, By } = require('selenium-webdriver');

class CartPageObject {
  constructor(driver) {
    this.driver = driver;
  }
  open = async () =>
    await this.driver.get('https://arnab-datta.github.io/counter-app/');

  addItem = async () =>
    await this.driver.findElement(By.className('fa-plus-circle')).click();

  getGeneralCounterValue = async () =>
    await this.driver.findElement(By.className('badge-pill')).getText();
  getFirstLineCounterValue = async () =>
    await this.driver.findElement(By.className('badge-primary')).getText();
}

//// TESTS

describe('add items feature', () => {
  let driver;
  let cartPageObject;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    cartPageObject = new CartPageObject(driver);
    cartPageObject.open();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should show the number 1 in the genral counter when users add just 1 item', async () => {
    // arrange  / given / precondicion

    // act / when / accion
    await cartPageObject.addItem();

    // assert / asercion / verificacion
    expect(await cartPageObject.getGeneralCounterValue()).toBe('1');
  });

  it('should show the number 1 in the line when users add just 1 item', async () => {
    // arrange  / given / precondicion

    // act / when / accion
    await cartPageObject.addItem();

    // assert / asercion / verificacion
    expect(await cartPageObject.getFirstLineCounterValue()).toBe('1');
  });

  it('should show the number 2 in the line counter and 1 in the genral counter when users add 2 items from the same line', async () => {
    // arrange  / given / precondicion

    // act / when / accion
    await cartPageObject.addItem();
    await cartPageObject.addItem();

    // assert / asercion / verificacion
    expect(await cartPageObject.getFirstLineCounterValue()).toBe('2');
    expect(await cartPageObject.getGeneralCounterValue()).toBe('1');
  });
});
