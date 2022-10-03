import React, {ReactNode} from 'react'
import styles from "./styles.module.css"

const TemplateLayout = ({ children }: { children: ReactNode}) => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h1>Header</h1>
            </header>
            <main className={styles.main}>
                { children }
            </main>
            <footer className={styles.footer}>
                <p>Footer</p>
            </footer>
        </div>
    </div>
  )
}

export default TemplateLayout