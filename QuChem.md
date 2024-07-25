# Quantum Chemistry Notes


## Theory

One of the key concept in computational chemistry is the molecular orbital.
In practical numerical simulations, we usually use the Hartree Fock molecular orbital.

What is a [Hartree Fock procedure](https://lcbc-epfl.github.io/iesm-public/Exercises/Ex4/HF.html)?

[An Introduction to Hartree-Fock Molecular Orbital Theory](http://vergil.chemistry.gatech.edu/notes/hf-intro/hf-intro.pdf)

[Difference between CI and CC](https://chemistry.stackexchange.com/questions/67763/difference-between-coupled-cluster-and-full-ci)

### For DFT

What is the BO energy surface?

## Numerical Simulation
* PySCF: [Quickstart][link-to-pyscf]
* Psi4: [Tutorial][link-to-psi4]
* BAGEL: [User Manual][link-to-bagel]
* GQCP: [Tutorial][link-to-gqcp]
* Molpro: [User's Manual][link-to-molpro]
* PyProcar: [This package is suitable for SSP calculation][link-to-pyprocar]

[link-to-bagel]: https://nubakery.org/user-manual.html
[link-to-pyscf]: https://pyscf.org/quickstart.html#integrals-density-fitting
[link-to-psi4]: https://psicode.org/psi4manual/master/index_tutorials.html
[link-to-gqcp]:https://gqcg.github.io/GQCP/tutorial/introduction.html
[link-to-molpro]: https://www.molpro.net/manual/doku.php
[link-to-pyprocar]: https://github.com/romerogroup/pyprocar

## Wheels

* CatKit: [Catalysis Kit][link-to-catkit]
* CatGen: [Catalysis Generator][link-to-catgen]

[link-to-catkit]:https://github.com/SUNCAT-Center/CatKit
[link-to-catgen]:https://catkit-jboes.readthedocs.io/en/latest/_static/frontmatter/catgen.html
## Textbooks
* 量子コンピュータによる量子化学計算入門 (KS化学専門書) [[link]](https://www.amazon.co.jp/量子コンピュータによる量子化学計算入門-KS化学専門書-杉﨑-研司/dp/4065218276)

## Links

[Thouless Theorem](https://joshuagoings.com/2013/11/26/644/).  Is has also been mentioned in this [OpenFermion tutorial](https://quantumai.google/openfermion/tutorials/circuits_1_basis_change).  
[VQE Example](https://joshuagoings.com/2020/08/20/VQE/)  
[This tutorial is useful](https://lcbc-epfl.github.io/iesm-public/intro.html)  

[Full configuration interaction theory](https://nucleartalent.github.io/ManyBody2018/doc/pub/fci/html/fci-bs.html)

# VQE Embedding

## Tools 

* [PsiEmbed](https://github.com/danclaudino/PsiEmbed)
* [projection-embedding-vqe](https://github.com/mrossinek/projection-embedding-vqe)
* [Qiskit-nature](https://github.com/qiskit-community/qiskit-nature)
* Qiskit-nature: [Getting Started](https://qiskit.org/ecosystem/nature/getting_started.html)


# DMET

The density matrix embedding theory (DMET) was proposed by Garnet Chan in 2012. DMET is one of the class of **_quantum embedding theory_**.

Selective references are:

* [Knizia_2012](http://dx.doi.org/10.1103/PhysRevLett.109.186404)
* [Knizia_2013](https://doi.org/10.1021/ct301044e)
* [Wouters_2016](https://doi.org/10.1021/acs.jctc.6b00316)

Up to date, there are some studies on implementation of DMET on quantum computers (basically VQE), but only a few:

* [A Hybrid C/Q Approach for Large-Scale Studies of Quantum Systems with DMET](https://doi.org/10.48550/arXiv.1610.06910): Rubin in 2016; UCC-VQE
* [Solving the Hubbard model using DMET and the VQE](https://doi.org/10.1103/PhysRevB.105.125117): Mineh & Montanaro in 2022; **swap networks**
* [A Problem Decomposition Approach](https://doi.org/10.48550/arXiv.1806.01305): Yamazaki in 2018; estimate resources for DMET
* [Optimizing electronic structure simulations on a trapped-ion quantum computer using problem decomposition](https://doi.org/10.1038/s42005-021-00751-9): Kawashima in 2021
* [Reduced density matrix sampling](https://doi.org/10.1103/PhysRevResearch.3.033230): Tilly in 2021; sampling reduced DMET; energy-weighted


The question is, how is the performance of DMET on quantum computer (quantum advantage)? Why not so many people try implementing DMET on QC?


# A brief review on QIP 2024

## Quantum Chemistry
Basically about clasicall quantum chemistry methods and VQE. 

### Problems with VQE
* measurement overhead: 
* optimization problem:
* 




## Tensor Network

## Quantum information and quantum algorithm

