import axios from 'axios';

const fetchImages = ({searchQuery = '', currentPage = 1, pageSize = 12}) => {
  return axios
    .get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20663729-402ac0755ef01966534e76e9d&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
