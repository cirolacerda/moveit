import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/cirolacerda.png" alt="Ciro Lacerda" ></img>
            <div>
                <strong>Ciro Lacerda</strong>
                <p>
                    <img src="icons/level.svg" alt=""></img>
                    Level 1</p>
            </div>
        </div>
    );
}