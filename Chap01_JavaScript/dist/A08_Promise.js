"use strict";

function sleep(ms) {
  var wakeUp = Date.now() + ms;
  while (Date.now() < wakeUp) {}
}
;