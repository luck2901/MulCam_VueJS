import "bootstrap/dist/css/bootstrap.min.css";

import { name, num, add } from "./A10_ExportOne";
import $ from "jquery";

const str = `${name} / ${num} / ${add(10.2)}`;
document.getElementById("app").innerHTML = str;
console.log("Hello World!");

$(function () {
  $("#root").html(two.min(20, 2));
});
