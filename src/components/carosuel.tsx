import Carousel from "react-bootstrap/Carousel";


const CarosuelComponent = () => {
  return (
    <Carousel className="signup-carousel" indicators={false}>
      <Carousel.Item>
        <div
          className="slide-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
          }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <div
          className="slide-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarosuelComponent;
