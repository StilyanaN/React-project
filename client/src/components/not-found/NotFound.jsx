import { Link } from 'react-router-dom';
import styles from "./NotFound.module.css";

const NotFound = () => {
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className={styles['not-found-container']}>
      <img src="img/not-found-page.jpg" alt="404 error" className={styles['not-found-img']} />
      <Link to='/' className="btn btn-primary py-md-3 px-md-5 mt-2" onClick={handleScrollToTop}>Go Back Home</Link>
    </div>
  );
};

export default NotFound;
