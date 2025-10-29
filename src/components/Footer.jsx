import { footerLinks } from "../constants";

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2025 Apple Inc. All right reserved.</p>

        <ul>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
