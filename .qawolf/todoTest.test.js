const qawolf = require("qawolf");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("todoTest", async () => {
  await page.goto("http://todomvc.com/examples/react");
  await page.click('[placeholder="What needs to be done?"]');
  await page.type('[placeholder="What needs to be done?"]', "shopping");
  await page.press('[placeholder="What needs to be done?"]', "Enter");
  await page.type('[placeholder="What needs to be done?"]', "stay home");
  await page.press('[placeholder="What needs to be done?"]', "Enter");
});