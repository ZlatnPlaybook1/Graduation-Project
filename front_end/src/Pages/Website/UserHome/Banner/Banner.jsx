import styles from "./Banner.module.css";

function Banner() {
  const text =
    "My site for My Frontend Mentor Projects is still in progress...";

  return (
    <div className={styles.soonBannerContainer}>
      <div className={styles.soonBanner}>
        <div className={styles.soonBannerText}>{text}</div>
        <div className={styles.soonBannerText}>{text}</div>
      </div>
    </div>
  );
}

export default Banner;
