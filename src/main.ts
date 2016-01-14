import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {Message} from "./message"; // external component

@Component({
  selector: "app",
  directives: [Message],
  template: `
  <h1>My app</h1>
  <message></message>
  `
})
class App {}

bootstrap(App);
