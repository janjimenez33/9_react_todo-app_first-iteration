import React from 'react';
import { ListHeader } from './ListHeader';
import { ItemsList } from './ItemsList';
import styles from './ListContainer.module.css';

export function ListContainer({ items }) {
    return (
        <div className={styles.container}>
            <ListHeader content="Todo List" />
            <ItemsList itemsList={items} />
        </div>
    );
}

export default ListContainer;
