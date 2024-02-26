// @ts-nocheck
import "./styles/main.css";
import App from "./App.svelte";
import { auth } from "./stores"
await auth.refresh()
// (async () => {
//     await auth.refresh();
//     new App({
//       // App 초기화 로직
//       target: document.getElementById("app"),
//     });
// })();
const app = new App({
  target: document.getElementById("app"),
});

export default app;
