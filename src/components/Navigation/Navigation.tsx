import { A } from '@solidjs/router';
import styles from './style.module.css';

export function Navigation() {
  return (
    <nav class={styles.nav}>
      <div class={styles.links}>
        <A href="/">Home</A>
        <A href="/play">Play</A>
      </div>
    </nav>
  );
}
