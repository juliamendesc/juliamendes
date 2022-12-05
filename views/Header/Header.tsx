import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false)

  function handleCssToggle() {
    setIsLightMode(!isLightMode)
  }
  return (
    <nav>
      <div className={styles.logo_container}>
        <h1 className={styles.title}>
          <a href="">{'< juliamendes />'}</a>
        </h1>
      </div>
      <div className={styles.css_mode_toggle}>
        <span className={styles.css_mode_toggle_icon}>CSS Mode</span>
      </div>
    </nav>
  )
}
