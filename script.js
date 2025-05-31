function switchLanguage(lang) {
    const testimonialEn = document.getElementById("testimonial-en");
    const testimonialEs = document.getElementById("testimonial-es");
  
    if (lang === "es") {
      document.querySelector(".hero h2").textContent =
        "Reparación de abolladuras sin pintura";
      document.querySelector(".cta-btn").textContent =
        "Solicita una Cotización";
      document.querySelector(".why-choose-us h3").textContent =
        "¿Por Qué Elegirnos?";
      document.querySelector(".why-choose-us ul").innerHTML = `
        <li>✔ Mas de 20 Años de Experiencia</li>
        <li>✔ Cotizaciones Rápidas</li>
        <li>✔ Precios Accesibles</li>`;
      document.querySelector(".testimonials h3").textContent =
        "Lo Que Dicen Nuestros Clientes";
  
      document.querySelector(".quote-form h3").textContent =
        "Solicita una Cotización Gratuita";
      document.querySelector(".about-text").innerHTML = `
        <strong>Sirviendo al Oeste de Texas con Excelencia desde 1999.</strong><br /><br />
        En Dent Magic, nos especializamos en <strong>Reparación de Abolladuras sin Pintura (PDR)</strong> de alta calidad para daños por granizo, abolladuras menores y golpes de puertas. Con más de 20 años de experiencia, hemos ayudado a miles de clientes en todo el Oeste de Texas a restaurar sus vehículos de manera rápida y accesible.
        <br /><br />
        A diferencia del trabajo de carrocería tradicional, el PDR es un método no invasivo que conserva la pintura original de tu vehículo. La mayoría de las abolladuras se pueden reparar el mismo día, y a menudo cuesta hasta un 50% menos que en un taller de carrocería.
        <br /><br />
        Aceptamos seguros y somos honestos — si tu daño no puede arreglarse con PDR, te referiremos a un taller de confianza.
        <br /><br />
        Llámanos de lunes a viernes, de 9AM a 5PM para una cotización gratuita.  
        O envíanos una foto para una cotización instantánea.  
        El precio final se confirma una vez que inspeccionamos tu vehículo en persona.
      `;
  
      testimonialEn.style.display = "none";
      testimonialEs.style.display = "block";
    } else {
      location.reload();
    }
  }
  