import perfilImg from "../assets/images/perfil2.jpg"; 


const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-indigo-400">
          INICIO / INTRODUCCIÓN
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          ¡Hola! Soy <span className="text-indigo-400">Giovanni Ramírez</span>
        </h1>

        <p className="mt-2 text-lg text-slate-300">
          Soy <span className="font-semibold">Ingeniero en Informática y maker 3D.</span>
        </p>

        <p className="mt-6 text-slate-300">
          Un diseñador que <span className="font-semibold">juzga un libro por su portada...</span>
          <br />
          Porque si la portada no te impresiona, ¿qué más lo hará?
        </p>

        <p className="mt-4 text-sm text-slate-400 max-w-md">
          Me gusta construir productos de principio a fin: desde servicios backend
          y bases de datos, hasta apps móviles, interfaces web y experiencias físicas
          con impresión 3D y AR. Disfruto los proyectos que resuelven problemas reales
          y se sienten agradables de usar.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold"
          >
            Contáctame
          </a>
          <a
            href="#projects"
            className="px-4 py-2 rounded-full border border-slate-600 hover:border-indigo-400 text-slate-200"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* Lado derecho */}
      <div className="space-y-4 text-sm text-slate-300">
        <p>
          Actualmente estudio Ingeniería en Informática en Santiago de Chile y
          trabajo en proyectos de{" "}
          <span className="font-semibold text-indigo-400">
            desarrollo web, mobile y productos físicos 3D
          </span>{" "}
          para casos reales y académicos.
        </p>

        <p>
          Tecnologías que uso frecuentemente:{" "}
          <span className="font-semibold">
            React, Java / Spring Boot, Kotlin para Android, SQL (Oracle & MySQL),
            Xano, Tailwind CSS,
          </span>{" "}
          además de herramientas para impresión 3D y corte láser.
        </p>

        <div className="border border-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">
            REDES
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/giovanni-ramirez-astudillo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              LinkedIn &gt;&gt;
            </a>
            <a
              href="https://github.com/iNanix12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              GitHub &gt;&gt;
            </a>
            <a
              href="https://www.instagram.com/nanix_project"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400"
            >
              Instagram &gt;&gt;
            </a>
          </div>
              {/* Foto de presentación */}
          <div className="flex justify-center md:justify-end mt-6">
              <img
              src={perfilImg}  
              alt="Foto de Giovanni Ramírez"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-500 shadow-lg shadow-indigo-500/30"
              />
          </div>



        </div>
      </div>
    </section>
  );
};

export default Hero;
