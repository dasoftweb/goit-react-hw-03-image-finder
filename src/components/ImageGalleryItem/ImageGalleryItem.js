// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ alt, previewURL}) => (
  <li className="ImageGalleryItem">
    <img src={previewURL} alt={alt} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;