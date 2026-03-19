import { Link } from "react-router-dom";

const navItems = [
  { label: "SERIES", path: "/series" },
  { label: "FILMS", path: "/films" },
  { label: "COLLECTIONS", path: "/collections" },
  { label: "LIVES", path: "/lives" },
];

function Header({ activePath = "/" }) {
  return (
    <header className="w-full border-b border-[#ECD698] bg-[#303030]">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link to="/" className="shrink-0">
          <img
            src="/images/logos/header-peanut.png"
            alt="Peanut"
            className="h-16 w-auto object-contain md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
          {navItems.map((item) => {
            const isActive = activePath === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`border-b-4 pb-3 text-base font-medium tracking-wide transition duration-200 xl:text-[20px] ${
                  isActive
                    ? "border-[#ECD698] text-[#ECD698]"
                    : "border-transparent text-[#ECD698] hover:opacity-80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5 text-[#ECD698] md:gap-7">
          <button
            type="button"
            aria-label="Rechercher"
            className="transition duration-200 hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Profil"
            className="transition duration-200 hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;