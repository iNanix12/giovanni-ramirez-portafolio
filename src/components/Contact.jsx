const Contact = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="text-slate-300 max-w-xl">
        Estoy buscando participar en equipos donde pueda seguir creciendo como
        desarrollador full-stack y aportar en proyectos que mezclen buena
        ingeniería con una experiencia de usuario clara. Si tienes una idea,
        colaboración o vacante en mente, conversemos.
      </p>

      <a
        href="mailto:gio.ramirezastudillo@gmail.com"
        className="mt-6 inline-block text-lg font-semibold text-indigo-400 hover:text-indigo-300"
      >
        gio.ramirezastudillo@gmail.com
      </a>
    </section>
  );
};

export default Contact;
