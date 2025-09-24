
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      <div className="footer-socials">
        <a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
