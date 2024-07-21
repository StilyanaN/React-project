import "./Loader.css"

export default function Loader() {
  return (
    <div className="page-wrapper">
        
      <div className="loader">
        <div className="jelly">
          <div className="body"></div>
          <div className="stick"></div>
          <div className="eye"></div>
          <div className="eye"></div>
          <div className="mouth"></div>
        </div>
        <div className="shadow"></div>
        <h3>Loading...</h3>
      </div>
      
    </div>
  );
}
