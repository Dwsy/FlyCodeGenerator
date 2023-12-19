localStorage.getItem('dwsy_version')
if (localStorage.getItem('dwsy_version') == undefined) {
  localStorage.setItem('dwsy_version', '1.0.0')
  localStorage.setItem('codeGeneratorEnable', 'true')
  localStorage.setItem('addDtsEnable', 'true')
  localStorage.setItem('bracketPairColorizationEnable', 'true')
  localStorage.setItem('szzrx', 'false')
  localStorage.setItem('theme', 'Xcode_default.json')
  localStorage.setItem('isBrowserMode', 'true')
}
