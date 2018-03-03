# SystemVerilog language support in Atom

Adds syntax highlighting and snippets to SystemVerilog files in Atom.

This is (so far) a clone of [Razer6's language-verilog](https://atom.io/packages/language-verilog) done in order to have Atom make the distinction between Verilog and SystemVerilog (thereby avoiding linter complaints about non-Verilog code and adding some bits to the [script](https://atom.io/packages/script) package that'll allow me to run Verilog and SV files differently). I have made no modifications to it whatsoever (besides replacing every "Verilog" with "SystemVerilog" and taking the .v and .vh extensions out of the 'fileTypes' entry in [grammars/systemverilog.cson](grammars/systemverilog.cson)). If you'd like to take this over, you're very welcome to.
