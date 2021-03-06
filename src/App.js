import { Component } from 'react';
import Loader from 'react-loader-spinner';
// Components
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imagesApi from './services/images-api';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    pageSize: 12,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    alt: '',
  };

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));

    if (this.state.showModal) {
      this.setState({ largeImgUrl: '', alt: '' });
    }
  };

  handleModal = (largeImgUrl, alt) => {
    this.setState({ largeImgUrl: largeImgUrl, alt: alt });
    this.toggleModal();
  };

  fetchImages = () => {
    const { searchQuery, currentPage, pageSize } = this.state;

    const options = { searchQuery, currentPage, pageSize };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: error }))
      .finally(() =>
        this.setState(
          { isLoading: false },
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          }),
        ),
      );
  };

  render() {
    const {
      images,
      isLoading,
      error,
      showModal,
      largeImgUrl,
      alt,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <h3 className="Error">Search error:( Please try again!</h3>}
        <ImageGallery images={images} onImageClick={this.handleModal} />
        {isLoading && (
          <Loader
            className="Loader"
            type="Oval"
            color="#3f51b5"
            height={50}
            width={50}
            timeout={1000}
          />
        )}
        {(images.length && !isLoading) > 0 && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImgUrl} alt={alt} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
