import styles from './Subheader.module.css'

export function Subheader({ subtitle }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{subtitle}</h2>
        </div>
    );
}

export default Subheader;
