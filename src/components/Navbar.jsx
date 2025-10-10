import { navLinks } from "../constants/index";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <img src="/logo.svg" alt="Apple logo" />

          <ul>
            {navLinks.map(({ label }) => (
              <li key={label}>
                <a href={label}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="flex-center gap-3">
            <button>
              <img src="/search.svg" alt="Search" />
            </button>
            <button>
              <img src="/cart.svg" alt="Cart" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
