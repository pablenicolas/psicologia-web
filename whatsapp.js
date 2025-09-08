/* ===== Botón de WhatsApp: lógica ===== */

(function () {
  // Plantilla de mensaje (podés agregar saludo, etc.)
  const template = [
    // 'Hola, quiero solicitar un turno.', // <- si querés, descomentá esta línea
    'Nombre:',
    'Edad:',
    'Motivo de consulta:',
    'Disponibilidad horaria:'
  ].join('\n');

  // Utilidad para construir la URL
  function buildWaUrl(number) {
    const msg = encodeURIComponent(template);
    return `https://wa.me/${number}?text=${msg}`;
  }

  // Delegación de eventos (por si se agregan más botones a futuro)
  document.addEventListener('click', function (ev) {
    const a = ev.target.closest('.btn-turno');
    if (!a) return;

    // Si el enlace es externo con href directo, dejamos pasar con Ctrl/Cmd
    if (ev.metaKey || ev.ctrlKey) return;

    ev.preventDefault();

    const number = a.getAttribute('data-wa');
    if (!number) return;

    const url = buildWaUrl(number);
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  // Mejora progresiva: si existe data-wa pero no hay ?text en href, lo seteo
  document.querySelectorAll('.btn-turno[data-wa]').forEach((a) => {
    try {
      const u = new URL(a.href);
      if (!u.searchParams.has('text')) {
        a.href = buildWaUrl(a.getAttribute('data-wa'));
      }
    } catch {
      // Si href no es válida, la reemplazo directamente
      a.href = buildWaUrl(a.getAttribute('data-wa'));
    }
  });
})();
