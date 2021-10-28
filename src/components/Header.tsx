import React from "react";
import conexedLogo from "../Conexed-logo.png";

const Header = () => (
    <header className="main-header">
        <section className="logo-holder">
            <img className="conexed-logo" src={conexedLogo} alt="Conexed Logo"/>
        </section>
        <p className="header-intro">Jaden's React-TypeScript-Node.js Interview</p>
    </header>
);

export default Header;
