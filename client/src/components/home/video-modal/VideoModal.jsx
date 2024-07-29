export default function VideoModal(){
    
    return(
        <div
  className="modal fade"
  id="videoModal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src=""
            id="video"
            // eslint-disable-next-line react/no-unknown-property
            allowscriptaccess="always"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    )
}