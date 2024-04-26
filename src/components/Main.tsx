import { ServiceForm } from "./Formular.tsx";
import styles from "./Main.module.css"
function Main() {
    const handleSave = (serviceData) => {
        console.log("Formular wurde gespeichert:", serviceData);
    };

    return (
        <main className={styles.mainContainer}>
            <ServiceForm onSave={handleSave} />
        </main>


    );
}

export default Main;
