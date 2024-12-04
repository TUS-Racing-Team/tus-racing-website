import "./sponsors.css";
import SponsorForm from "./SponsorForm";

const images = [
  "/images/sponsors/samsung-logo.png",
  "/images/sponsors/red-bull-logo.png",
  "/images/sponsors/bosch-logo.png",
];

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <SponsorForm />
      <div>
        <h2 className="sponsor-h1">Our Sponsors:</h2>
        <div className="carousel">
          <div className="group">
            {images.map((image, index) => (
              <div className="card" key={index}>
                <img src={image} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
          <div aria-hidden className="group">
            {images.map((image, index) => (
              <div className="card" key={index + images.length}>
                <img src={image} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
