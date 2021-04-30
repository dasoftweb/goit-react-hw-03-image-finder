// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ alt, previewURL, largeImageURL, onImageClick }) => (
  <li className="ImageGalleryItem" onClick={() => onImageClick(largeImageURL, alt)}>
    <img src={previewURL} alt={alt} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;