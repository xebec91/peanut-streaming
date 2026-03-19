function PosterRow({ title, items }) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 text-lg font-semibold text-white md:text-2xl">{title}</h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.title} className="group">
            <div className="aspect-[3/5] overflow-hidden bg-[#262626]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PosterRow;