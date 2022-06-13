import { FullPage, Slide } from 'react-full-page';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'


const HomeScrolls = () => {
  return (
    <div>
       
       <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.annahar.com/ContentFilesArchive/527995Image1-1180x677_d.jpg?version=4246873"
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>집에 안쓰는 물건 있죠?</h1>
        <p>버리지 말고 여기서 바꿔봐요!</p>
        <Link to="./mainInfo" style={{ textDecoration: 'none' }}>
              <Button variant="outlined">교환 물품 보러 가기</Button>
            </Link>
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://miro.medium.com/max/1400/1*kr-RhSv4SNYjRODjjF3UVw.jpeg"
        alt="Third slide"
      />
      <Carousel.Caption>
      <h1>집 주변에서 교환해요!</h1>
        <p>빠르고 편리하게 이용해요!</p>
        <Link to="./mainInfo" style={{ textDecoration: 'none' }}>
              <Button variant="outlined">교환 물품 보러 가기</Button>
            </Link>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  );
};

export default HomeScrolls;