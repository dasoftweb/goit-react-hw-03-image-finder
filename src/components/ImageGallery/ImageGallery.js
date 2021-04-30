// import PropTypes from 'prop-types';
import ImageGalleryItem from '../../components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className="ImageGallery">
    {images.map(({ id, tags, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        alt={tags}
        previewURL={webformatURL}
        largeImageURL={largeImageURL}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

export default ImageGallery;
