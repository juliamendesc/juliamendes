import React from 'react';
import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h1 className={styles.section_title}>{title}</h1>;
};

export default SectionTitle;
