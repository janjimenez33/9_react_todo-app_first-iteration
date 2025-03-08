import React from 'react';
import { ItemCard } from './ItemCard';
import styles from './ItemsList.module.css';

export function ItemsList({ itemsList }) {
    return (
        <ul className={styles.container}>
            {itemsList.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </ul>
    );
}

export default ItemsList;
