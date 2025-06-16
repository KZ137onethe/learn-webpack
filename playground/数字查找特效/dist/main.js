(() => {
  "use strict";
  function t(t, e) {
    return Math.floor(Math.random() * (e - t) + t);
  }
  const e = document.getElementById("divContainer"),
    n = document.getElementById("divCenter");
  var r = new (class {
    constructor(t = 500) {
      (this.duration = t),
        (this.number = 1),
        (this.onNumberCreated = null),
        (this.timerId = null);
    }
    start() {
      this.timerId ||
        (this.timerId = setInterval(() => {
          this.onNumberCreated &&
            this.onNumberCreated(
              this.number,
              (function (t) {
                if (t < 2) return !1;
                for (let e = 2; e <= t - 1; e++) if (t % e == 0) return !1;
                return !0;
              })(this.number)
            ),
            this.number++;
        }, this.duration));
    }
    stop() {
      clearInterval(this.timerId), (this.timerId = null);
    }
  })(200);
  r.onNumberCreated = function (r, i) {
    !(function (r, i) {
      const o = document.createElement("span");
      if (((o.textContent = r), i)) {
        const e = `rgb(${t(0, 255)}, ${t(0, 255)}, ${t(0, 255)})`;
        (o.style.color = e),
          (function (e, r) {
            const i = document.createElement("div");
            (i.textContent = e),
              Object.assign(i.style, {
                position: "fixed",
                left: "50%",
                top: "50%",
                fontSize: "8em",
                color: r,
              }),
              n.insertAdjacentElement("afterend", i);
            const o = new KeyframeEffect(
                i,
                [
                  { transform: "translate(-50%, -50%)", opacity: 1 },
                  {
                    transform: `translate(${t(-200, 200)}px, ${t(
                      -200,
                      200
                    )}px)`,
                    opacity: 0,
                  },
                ],
                { duration: 1e3, easing: "ease-in" }
              ),
              s = new Animation(o, document.timeline);
            s.play(), s.addEventListener("finish", () => i.remove());
          })(r, e);
      }
      e.appendChild(o),
        (function (t) {
          n.textContent = t;
        })(r);
    })(r, i);
  };
  let i = !1;
  addEventListener("click", () => {
    i ? (r.stop(), (i = !1)) : (r.start(), (i = !0));
  });
})();
