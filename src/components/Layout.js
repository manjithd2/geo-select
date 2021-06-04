import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Layout;