import { ServiceForm } from "./Formular.tsx";
import styles from "./Main.module.css"

function handleSave() {

}

function Main() {


    return (
        <main className={styles.mainContainer}>
            <ServiceForm onSave={handleSave} />
        </main>


    );
}

export default Main;
