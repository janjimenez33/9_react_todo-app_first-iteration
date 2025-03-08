import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>TodoApp</h1>
    </header>
  )
}

export default Header
