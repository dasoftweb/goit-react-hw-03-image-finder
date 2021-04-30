// import PropTypes from 'prop-types';
import ImageGalleryItem from '../../components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ id, tags, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        alt={tags}
        previewURL={webformatURL}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;
