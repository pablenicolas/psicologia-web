
// Basic enhancements
(function(){
  const params = new URLSearchParams(location.search);
  const prof = params.get('prof');
  const select = document.getElementById('profesional');
  if (prof && select){
    for (const opt of select.options){
      if (opt.value.toLowerCase().includes(prof)){
        opt.selected = true;
        break;
      }
    }
  }
})();
