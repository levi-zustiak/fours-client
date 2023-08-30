import { Navigation } from '@components/Navigation';
import styles from './style.module.css';
import { Outlet } from '@solidjs/router';

export function Layout() {
  return (
    <div class={styles.container}>
      <Navigation />
      <main class={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
