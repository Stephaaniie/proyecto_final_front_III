import { useContext } from "react";

import { ContextGlobal } from "./utils/global.context.jsx";

function Footer() {
    const { theme } = useContext(ContextGlobal);

    return (
        <footer className={theme === "dark" ? "dark" : "" }>
            <p>Powered by</p>
            <img src="../../public/DH.png" alt='DH-logo' />
        </footer>
    );
}

export default Footer
