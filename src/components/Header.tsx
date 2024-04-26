import styles from "./Header.module.css";


function Header() {
    return (
        <header className={styles.mainHeader}>

            <h1 className={styles.mainTitle}>Der etwas andere Gepäcksplaner</h1>
            <div className={styles.headerContent}>
                <span className={styles.madeByText}>Made by</span>
                <a href="https://princesscandytail.github.io/prinkwebdreams/mitarbeiter.html">
                    <img src="src/assets/UnicornLogo.png" alt="Ab in den Urlaub" className={styles.headerImage} />
                </a>

            </div>

        </header>
    );
}

export default Header;
