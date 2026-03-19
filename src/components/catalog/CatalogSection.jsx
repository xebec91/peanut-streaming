function CatalogSection({ title, items }) {
  return (
    <section className="mt-10">
      <h2 className="mb-5 text-xl font-semibold text-white">{title}</h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.title} className="group">
            <div className="aspect-[3/5] overflow-hidden bg-[#262626]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CatalogSection;