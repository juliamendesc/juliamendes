import { useState } from 'react'
import styles from './Header.module.css'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function Header() {
  const [isLightMode, setIsLightMode] = useState(false)

  function handleCssToggle() {
    setIsLightMode(!isLightMode)
    console.log(isLightMode)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="" className={styles.nav_link}>
            {'< juliamendes />'}
          </a>
        </div>
        <div className={styles.css_mode}>
          {isLightMode ? (
            <SunIcon onClick={handleCssToggle} height="24px" width="24px" />
          ) : (
            <MoonIcon onClick={handleCssToggle} height="24px" width="24px" />
          )}
        </div>
      </nav>
    </div>
  )
}
