const projects = [
  {
    title: "Perfulandia SPA – Plataforma de Microservicios",
    description:
      "Rediseño de un sistema monolítico a una arquitectura de microservicios para una empresa de perfumes ficticia.",
    extra:
      "Incluye API Gateway, registro de servicios, esquema MySQL y documentación alineada a buenas prácticas de arquitectura.",
    link: "#mano-robotica-video",
  },
  {
    title: "CreateLab – E-commerce para impresiones 3D",
    description:
      "Aplicación móvil con Kotlin y backend Xano para gestionar productos, carritos y stock, conectada a un flujo real de impresión 3D.",
    extra:
      "Pensada para que personas sin conocimientos técnicos puedan solicitar y seguir sus pedidos de impresiones personalizadas.",
    link: "#crealab-video",
  },
  {
    title: "3D & AR Lab – Físico + Digital",
    description:
      "Colección de figuras 3D, tarjetas AR y experimentos con NFC que vinculan objetos físicos con videos o contenido interactivo.",
    extra:
      "Explora cómo extender un producto más allá de su forma física usando herramientas accesibles y código abierto.",
    link: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Proyectos destacados</h2>

      <div className="space-y-8">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="border border-slate-800 rounded-xl p-5 bg-slate-900/40"
          >
            <p className="text-xs uppercase text-indigo-400 tracking-[0.25em]">
              Proyecto destacado
            </p>
            <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <p className="mt-1 text-sm text-slate-400">{p.extra}</p>
            <a
              href={p.link}
              className="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Ver proyecto
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
