import { Component } from 'react';
// Components
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imagesApi from './services/images-api';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    pageSize: 12,
    isLoading: false,
  };

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
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
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />
        {isLoading && <h1>Загрузка</h1>}
        {images.length > 0 && <Button onClick={this.fetchImages} />}
      </>
    );
  }
}

export default App;
