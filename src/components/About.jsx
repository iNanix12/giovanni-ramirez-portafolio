const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-[2fr,1.3fr] gap-10"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-slate-300">
          Soy un desarrollador que disfruta transformar ideas en productos
          funcionales. Me interesan la arquitectura limpia, la buena experiencia
          de usuario y que la tecnología sea entendible para las personas.
        </p>
        <p className="mt-4 text-slate-400">
          He trabajado en microservicios con Java y Spring Boot, sistemas con
          bastante lógica de negocio en Oracle, apps móviles en Kotlin y flujos
          de e-commerce respaldados por APIs como Xano. Fuera de la pantalla,
          diseño e imprimo piezas físicas que complementan las experiencias digitales.
        </p>
      </div>

      <div id="lab">
        <h3 className="text-xl font-semibold mb-2">Lab</h3>
        <p className="text-slate-400 text-sm">
          El Lab es donde experimento: productos impresos en 3D conectados a videos
          en AR, tarjetas con NFC, diseños en láser y pequeñas herramientas para
          automatizar tareas del día a día. Algunas ideas crecen hasta convertirse
          en proyectos completos; otras quedan como prototipos, pero siempre
          aprendo algo nuevo.
        </p>
      </div>
    </section>
  );
};

export default About;
