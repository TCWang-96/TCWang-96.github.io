---
title: "McMillan–Allen–Dynes Tc calculator"
description: "Estimate the superconducting transition temperature from λ, μ* and ω_log."
math: true
---

Estimates the critical temperature of a conventional (phonon-mediated) superconductor
with the Allen–Dynes form of the McMillan formula:

$$
T_c = \frac{\omega_{\log}}{1.2}\,
\exp\!\left[ -\frac{1.04\,(1+\lambda)}{\lambda - \mu^*\,(1 + 0.62\,\lambda)} \right]
$$

{{< mcmillan >}}

**Notes**

- $\lambda$: electron–phonon coupling constant; $\mu^*$: Coulomb pseudopotential;
  $\omega_{\log}$: logarithmic average phonon frequency (e.g. from an Eliashberg function $\alpha^2F(\omega)$).
- The formula works best for weak to intermediate coupling ($\lambda \lesssim 1.5$).
  For strong coupling, Allen and Dynes add correction factors $f_1 f_2$ (not included here),
  and solving the Eliashberg equations is more reliable.
- Reference: P. B. Allen and R. C. Dynes, *Phys. Rev. B* **12**, 905 (1975);
  W. L. McMillan, *Phys. Rev.* **167**, 331 (1968).
