# [SystemVerilog language support in Atom](https://atom.io/packages/language-systemverilog)

Adds syntax highlighting and snippets to SystemVerilog files in Atom.

This is (so far nothing more than) a clone of [Razer6's language-verilog](https://atom.io/packages/language-verilog) done in order to have Atom make the distinction between Verilog and SystemVerilog (thereby avoiding linter complaints about non-Verilog code and adding some bits to the [script](https://atom.io/packages/script) package that'll allow me to run Verilog and SV files differently). The only modifications that have been made (as of 2018-03-03) are:
* replacing every "Verilog" with "SystemVerilog"
* taking the .v and .vh extensions out of the 'fileTypes' entry in [grammars/systemverilog.cson](grammars/systemverilog.cson)

If you'd like to take this over, you're very welcome to.
