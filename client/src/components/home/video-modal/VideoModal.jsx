import PropTypes from "prop-types";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

const VideoModal = ({ isVisible, onClose, videoSrc }) => {
  const videoId = videoSrc.split("v=")[1]?.split("&")[0];

  return (
    <ModalVideo
      channel="youtube"
      autoplay
      isOpen={isVisible}
      videoId={videoId}
      onClose={onClose}
    />
  );
};

VideoModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  videoSrc: PropTypes.string.isRequired,
};

export default VideoModal;
