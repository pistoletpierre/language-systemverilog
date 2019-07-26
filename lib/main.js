exports.activate = function () {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.systemverilog', {
    type: 'preproc_arg',
    language (arg) { return 'systemverilog' },
    content (arg) { return arg }
  })

}
