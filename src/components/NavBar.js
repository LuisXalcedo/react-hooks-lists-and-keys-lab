import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const listLink = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return (
    <div>
      <nav>{listLink}</nav>
    </div>
  );
}

export default NavBar;
