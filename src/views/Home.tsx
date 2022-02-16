
import styles from './../styles/hero.module.css';
import imgHero from './../images/programador.png'
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          
          <div className={styles.heroText}>
            <h1>O maior banco de devs do Brasil</h1>
            <p>Nao importa se front ou back end,  fazer networking e muito importante. Faça parte da maior comunidade de desenvolvedores brasileiros.</p>
            <Link to="/devs" className={`btn btn-lg btn-primary ${styles.heroBtn}`}>
              Entre agora
            </Link>
          </div>
          
          <div className={styles.heroImage}>
            <img src={imgHero} alt="Programador" />
          </div>

        </div>
      </div>
    </section>
  )
}
