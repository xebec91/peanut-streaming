function PlayerHero({ title, image }) {
  return (
    <section>
      <p className="mb-3 text-center text-lg font-semibold uppercase text-white md:text-2xl">
        {title}
      </p>

      <div className="flex justify-center">
        <div className="relative w-full max-w-[1180px] overflow-hidden bg-[#262626] lg:h-[670px]">
          <img
            src={image}
            alt={title}
            className="h-[260px] w-full object-cover opacity-55 sm:h-[360px] md:h-[500px] lg:h-full"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Lire"
              className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#ECD698] text-[#ECD698] transition hover:scale-105 md:h-36 md:w-36"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="ml-1 h-10 w-10 md:h-16 md:w-16"
              >
                <path d="M8 5.5v13l10-6.5-10-6.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlayerHero;