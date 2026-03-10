import React from 'react';
import styles from './Error.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={styles.errorMessage}>
      <span className={styles.icon}>⚠️</span>
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;