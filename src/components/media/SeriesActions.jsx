function SeriesActions() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr] lg:items-start">
      <button
        type="button"
        className="inline-flex h-16 items-center justify-center border-2 border-[#ECD698] px-6 text-2xl font-semibold uppercase text-[#ECD698] transition hover:bg-[#ECD698] hover:text-[#303030]"
      >
        Episode suivant
      </button>

      <button
        type="button"
        className="inline-flex items-center justify-start gap-3 text-2xl font-semibold text-[#ECD698] transition hover:opacity-80 lg:justify-center"
      >
        Liste des épisodes
        <span className="text-3xl">⌄</span>
      </button>
    </div>
  );
}

export default SeriesActions;