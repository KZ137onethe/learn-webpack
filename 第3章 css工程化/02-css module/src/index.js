import * as styles from "./css/index.css";
import * as appStyles from "./css/app.css";

console.log("💬 ⋮ styles => ", styles);
console.log("💬 ⋮ appStyles => ", appStyles);

const t1El = document.getElementById("t-1"),
  t2El = document.getElementById("t-2"),
  t3El = document.getElementById("t-3"),
  t4El = document.getElementById("t-4");

t1El.className = appStyles["m-red"];
t2El.className = appStyles["m-blue"];
t3El.className = appStyles["m-orange"];
t4El.className = appStyles["m-green"];
