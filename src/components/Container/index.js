<<<<<<< HEAD
import styles from './Container.modules.css'
=======
import styles from './Container.module.css';
>>>>>>> f30de76a271ae8f2fdc84af4960c3971053043a8

function Container({children}){
    return(
        <section className={styles.container}>
            {children}
        </section>
<<<<<<< HEAD
    )

=======
    );
>>>>>>> f30de76a271ae8f2fdc84af4960c3971053043a8
}

export default Container;