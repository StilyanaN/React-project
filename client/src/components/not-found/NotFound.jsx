import styles from "./NotFound.module.css"
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        
      <div className={styles['not-found-container']}>
            <img src="img/not-found-page.jpg" alt="404 error" className={styles['not-found-img']}/>
            
            <Link to='/' className="btn btn-primary py-md-3 px-md-5 mt-2">Go Back Home</Link>
        </div>
      
    );
};

export default NotFound;
