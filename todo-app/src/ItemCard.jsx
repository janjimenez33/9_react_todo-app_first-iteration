import styles from './ItemCard.module.css'

export function ItemCard({ item }) {
    const getTitleStyle = (status) => {
        switch (status) {
            case 'done':
                return styles.titleDone
            case 'in progress':
                return styles.titleInProgress
            default:
                return styles.titlePending
        }
    }

    const getStatusStyle = (status) => {
        switch (status) {
            case 'done':
                return styles.statusDone
            case 'in progress':
                return styles.statusInProgress
            default:
                return styles.statusPending
        }
    }

    return (
        <li className={styles.container}>
            <h4 className={`${styles.title} ${getTitleStyle(item.status)}`}>
                {item.title}
            </h4>
            <p className={styles.description}>{item.description}</p>
            <span className={`${styles.status} ${getStatusStyle(item.status)}`}>
                {item.status}
            </span>
        </li>
    );
}

export default ItemCard;
