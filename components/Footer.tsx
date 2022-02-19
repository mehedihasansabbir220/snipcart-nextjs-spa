import styles from '../styles/Footer.module.scss'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>
                Next.js app with a&nbsp;<a href="#">Snipcart</a>&nbsp;- powered store
            </p>
            <div className={styles.footer__left}>
                <a href="https://github.com/mehedihasansabbir220">Github</a>
            </div>
        </footer>
    )
}