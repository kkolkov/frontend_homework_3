import styles from './TypingIndicator.module.css';

interface TypingIndicatorProps {
  isVisible?: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.typingIndicator}>
      <div className={styles.avatar}>
        <img src="/gigachat-icon.png" alt="GigaChat" />
      </div>
      <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
};

export default TypingIndicator;