export default function Footer() {
  const links = ['home', 'about', 'skills', 'education', 'projects', 'contact'];

  return (
    <footer>
      <div className="ft-top">
        <div className="ft-logo">
          fahid<span>.</span>
        </div>

        <div className="ft-links">
          {links.map((link) => (
            <a key={link} href={`/#${link}`}>
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      </div>

      <div className="ft-bot">
        <div className="ft-copy">© 2026 Fahid Hasan · All Rights Reserved</div>
        <div className="ft-made">
          Built by <span>Fahid Hasan</span> · MERN Stack Developer
        </div>
      </div>
    </footer>
  );
}
