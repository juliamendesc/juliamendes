import { FC, useState } from 'react';
import styles from './Header.module.css';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const Header: FC = () => {
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  function handleCssToggle() {
    setIsLightMode(!isLightMode);
    console.log(isLightMode);
  }

  return (
    <div className={styles.container}>
      <nav>
        <div>
          <Link href="/">{'< juliamendes />'}</Link>
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
  );
};

export default Header;
