import { ServiceForm } from "./Formular.tsx";
import styles from "./Main.module.css";
import { ServiceData } from "./Formular.tsx"; // Import ServiceData type

function Main() {
    const handleSave = (serviceData: ServiceData) => { // Add type annotation for serviceData
        console.log("Formular wurde gespeichert:", serviceData);
    };

    return (
        <main className={styles.mainContainer}>
            <ServiceForm onSave={handleSave} />
        </main>
    );
}

export default Main;
