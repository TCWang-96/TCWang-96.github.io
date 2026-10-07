// McMillan–Allen–Dynes Tc calculator. Plain browser JavaScript, no framework,
// so it works unchanged with any site generator (Hugo now, maybe Astro later).
// Expects the form markup from layouts/shortcodes/mcmillan.html (ids mad-*).
(() => {
  const $ = (id) => document.getElementById(id);
  const fields = ["mad-lambda", "mad-mu", "mad-omega", "mad-unit"].map($);
  const out = $("mad-result");

  // Allen–Dynes form of the McMillan formula; omegaLogK in kelvin, returns Tc in kelvin.
  function tcAllenDynes(lambda, mu, omegaLogK) {
    const denom = lambda - mu * (1 + 0.62 * lambda);
    if (denom <= 0) return null;  // no superconductivity predicted
    return (omegaLogK / 1.2) * Math.exp(-1.04 * (1 + lambda) / denom);
  }

  function update() {
    const lambda = parseFloat($("mad-lambda").value);
    const mu = parseFloat($("mad-mu").value);
    const omega = parseFloat($("mad-omega").value) * parseFloat($("mad-unit").value);
    out.classList.remove("error");
    if (![lambda, mu, omega].every(Number.isFinite) || lambda <= 0 || mu < 0 || omega <= 0) {
      out.classList.add("error");
      out.textContent = "Enter λ > 0, μ* ≥ 0 and ω_log > 0.";
      return;
    }
    const tc = tcAllenDynes(lambda, mu, omega);
    if (tc === null) {
      out.classList.add("error");
      out.textContent = "λ ≤ μ*(1 + 0.62λ): the formula predicts no superconductivity.";
      return;
    }
    const tcText = tc < 0.01 ? tc.toExponential(2) : tc.toFixed(2);
    out.innerHTML = `T<sub>c</sub> ≈ <strong>${tcText} K</strong> <span class="hint">(ω<sub>log</sub> = ${omega.toFixed(1)} K)</span>`;
  }

  fields.forEach((el) => el.addEventListener("input", update));
  $("mad-calc").addEventListener("submit", (e) => e.preventDefault());
  update();
})();
