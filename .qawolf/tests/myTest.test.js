const { launch } = require("qawolf");
const selectors = require("../selectors/myTest");

describe('myTest', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "http://www.webdelog.info/" });
  });

  afterAll(() => browser.close());
  
  it('can click "typescript-plugin-styled-components 導入メモ" link', async () => {
    await browser.click(selectors[0]);
  });
  
  it("can scroll", async () => {
    await browser.scroll(selectors[1], { x: 0, y: 5589 });
  });
  
  it('can click "2020 / 1 (2)" link', async () => {
    await browser.click(selectors[2]);
  });
});