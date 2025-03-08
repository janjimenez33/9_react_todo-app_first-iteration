import styles from './ListHeader.module.css'

export function ListHeader({ content }) {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{content}</h3>
        </div>
    );
}

export default ListHeader;
