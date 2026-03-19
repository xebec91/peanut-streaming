import { Link } from "react-router-dom";

function AuthTopBar({ rightLabel, rightTo }) {
  return (
    <header className="w-full border-b border-[#ECD698] bg-[#303030]">
      <div className="mx-auto flex h-28 max-w-[1440px] items-center justify-between px-8 md:px-12 lg:px-20">
        <Link to="/" className="shrink-0">
          <img
            src="/images/logos/header-peanut.png"
            alt="Peanut"
            className="h-16 w-auto object-contain md:h-20"
          />
        </Link>

        <Link
          to={rightTo}
          className="text-xl tracking-wide text-[#ECD698] transition hover:opacity-80 md:text-2xl"
        >
          {rightLabel}
        </Link>
      </div>
    </header>
  );
}

export default AuthTopBar;