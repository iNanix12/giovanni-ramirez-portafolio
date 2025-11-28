import manoRoboticaVideo from "../assets/images/manorobotica.mp4";

const gallery = [
  {
    title: "Mano robótica",
    video: manoRoboticaVideo,
    description:
      "Prototipo de mano robótica controlada electrónicamente. Diseño, armado y pruebas realizadas por mí.",
  },
  
];

const Gallery = () => {
  return (
    <section id="galeria" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">Galería de proyectos</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden"
          >
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            )}

            {item.video && (
              <video
                className="w-full h-56 object-cover"
                controls
                loop
              >
                <source src={item.video} type="video/mp4" />
              </video>
            )}

            <div className="p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
