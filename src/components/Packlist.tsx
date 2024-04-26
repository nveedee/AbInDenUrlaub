import styles from "./Packliste.module.css";

const generateRandomItems = () => {
    const items = [
        { name: "Unterhosen", min: 5, max: 10 },
        { name: "Pullover", min: 1, max: 5 },
        { name: "T-Shirts", min: 1, max: 5 },
        { name: "Hosen", min: 1, max: 5 },
        { name: "Trainerhosen", min: 1, max: 2 },
        { name: "Socken", min: 6, max: 10 },
        { name: "Zahnbürste", min: 1, max: 1 },
        { name: "Schampoo", min: 1, max: 1 },
        { name: "Deos", min: 1, max: 1 },
        { name: "Schuhe", min: 1, max: 2 },
        { name: "Sonnenbrille", min: 1, max: 2 }

    ];

    const randomItems = items.map(item => {
        const quantity = Math.floor(Math.random() * (item.max - item.min + 1)) + item.min;
        return { name: item.name, quantity: quantity };
    });

    return randomItems;
};

const Packlist = ({ name }: { name: string }) => {
    const randomItems = generateRandomItems();

    return (
        <div className={styles.packlistContainer}>
            <h2 className={styles.maintitle}>{name} Packliste</h2>
            <ul className={styles.checklist}>
                {randomItems.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" id={`item${index}`} />
                        <label htmlFor={`item${index}`}>{item.name} ({item.quantity})</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Packlist;
