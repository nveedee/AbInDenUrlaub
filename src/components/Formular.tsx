import React, {FormEvent, useState} from "react";
import styles from "./Formular.module.css";
import Packlist from "./Packlist.tsx";

type ServiceFormProps = {
    onSave: (service: ServiceData) => void;
};

type ServiceData = {
    name: string;
    gender: string;
    hygiene: string;
    vacationDays: number;
    vocationtype: string;
    locationtype: string;
};

export function ServiceForm(props: ServiceFormProps) {
    const [formData, setFormData] = useState<ServiceData>({
        name: "",
        gender: "bitte auswählen",
        hygiene: "bitte auswählen",
        vacationDays: 0,
        vocationtype: "Bergurlaub",
        locationtype: "Hotel"
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowList(true)
        props.onSave(formData);
    };
    const [showList, setShowList] = useState(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleVacationDaysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const days = parseInt(event.target.value);
        setFormData({
            ...formData,
            vacationDays: days,
        });
    };

    return (

        <>
        <form className={styles.serviceForm} onSubmit={onSubmit}>
            <label className={styles.serviceLabel}>
                Name:
                <input className={styles.serviceInput} type="text" name="name" value={formData.name}
                       onChange={handleInputChange} required/>
            </label>
            <label className={styles.serviceLabel}>
                Geschlecht:
                <select className={styles.serviceSelect} name="gender" value={formData.gender}
                        onChange={handleInputChange} required>
                    <option value="">Bitte auswählen</option>
                    <option value="male">Männlich</option>
                    <option value="female">Weiblich</option>
                    <option value="divers">Divers</option>
                </select>
            </label>
            <label className={styles.serviceLabel}>
                Hygienisch:
                <select className={styles.serviceSelect} name="hygiene" value={formData.hygiene}
                        onChange={handleInputChange} required>
                    <option value="">Bitte auswählen</option>
                    <option value="low">Wenig</option>
                    <option value="medium">Mittel</option>
                    <option value="high">Sehr</option>
                </select>
            </label>

            <label className={styles.serviceLabel}>
                Urlaubstage
                <input className={styles.serviceInput} type="range" name="vacationDays" min="0" max="30"
                       value={formData.vacationDays} onChange={handleVacationDaysChange}/>
                <span>{formData.vacationDays} </span>
            </label>

            <label className={styles.serviceLabel}>
                Urlaubstyp:
                <select className={styles.serviceSelect} name="vocationtype" value={formData.vocationtype}
                        onChange={handleInputChange} required>
                    <option value="">Bitte auswählen</option>
                    <option value="beach">Strandurlaub</option>
                    <option value="mountain">Bergurlaub</option>
                    <option value="city">Städtereise</option>
                    <option value="adventure">Abenteuerurlaub</option>
                </select>
            </label>

            <label className={styles.serviceLabel}>
                Unterkunftstyp:
                <select className={styles.serviceSelect} name="locationtype" value={formData.locationtype}
                        onChange={handleInputChange}>
                    <option value="">Bitte auswählen</option>
                    <option value="hotel">Hotel</option>
                    <option value="ferienwohnung">Ferienwohnung</option>
                    <option value="hostel">Hostel</option>
                    <option value="campingplatz">Campingplatz</option>
                    <option value="resort">Resort</option>
                </select>
            </label>

            <button className={styles.serviceButton} type="submit">Eintragen</button>
        </form>

    {
        showList &&
        <Packlist/>
    }
</>
)
    ;

}