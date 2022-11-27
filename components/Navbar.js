import Link from "next/link";
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/about">About</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/profile/mubin">My Profile</Link>

            </div>
        </div>
    )
}

export default Navbar;