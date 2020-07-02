// import click, { type, getText } from "./module.js";
// import * as fn1 from "./module.js";
import { click } from "./module.js";
import { type } from "./module.js";
import Browser from "./browser.js";
console.log(click());
console.log(type());
let browser = new Browser();
console.log(browser.getTitle());