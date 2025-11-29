const workItems = [
  {
    title: "Perfulandia SPA (Escolar)",
    description:
      "Arquitectura de microservicios para una agencia de perfumes: servicios Spring Boot, API Gateway y  base de datos MySQL, diseñada como caso completo.",
    link: "#",
  },
  {
    title: "Fservices – Reportes de Consumo de Agua (Escolar)",
    description:
      "Sistema en Oracle PL/SQL para generar reportes fiscales y resúmenes, usando procedimientos almacenados, vistas, roles y seguridad para un escenario de servicios públicos.",
    link: "#",
  },
  {
    title: "CreateLab – E-commerce e Impresión 3D (Escolar)",
    description:
      "App Android en Kotlin conectada a backend Xano para gestionar productos, carritos y pedidos, integrada con mi propio flujo de impresión 3D y corte láser.",
    link: "#",
  },
];

const WorkExperience = () => {
  return (
    <section id="work" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Experiencia / Proyectos clave</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {workItems.map((item, idx) => (
          <article
            key={idx}
            className="border border-slate-800 rounded-xl p-4 flex flex-col justify-between bg-slate-900/40"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {item.description}
              </p>
            </div>
            <a
              href={item.link}
              className="mt-4 inline-block text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Ver más
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
