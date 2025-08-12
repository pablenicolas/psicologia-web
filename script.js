
// Prefill professional from querystring (?prof=rodrigo|natalia)
(function(){
  const params = new URLSearchParams(location.search);
  const prof = params.get('prof');
  const select = document.getElementById('profesional');
  if (prof && select){
    for (const opt of select.options){
      if (opt.text.toLowerCase().includes(prof)){
        opt.selected = true;
        break;
      }
    }
  }
})();
