import "./sponsors.css"; // Import the CSS for styling
import SponsorForm from "./SponsorForm"; // Import the SponsorForm component

// Array of sponsor images to be displayed in the carousel
const images = [
  "/images/sponsors/samsung-logo.png",
  "/images/sponsors/red-bull-logo.png",
  "/images/sponsors/bosch-logo.png",
];

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      {/* Sponsor form for potential sponsors */}
      <SponsorForm />

      <div>
        {/* Heading for the sponsors section */}
        <h2 className="sponsor-h1">Our Sponsors:</h2>

        {/* Carousel container to display the sponsor logos */}
        <div className="carousel">
          {/* First group of images for smooth looping */}
          <div className="group">
            {/* Loop through the images array and create a card for each image */}
            {images.map((image, index) => (
              <div className="card" key={index}>
                {/* Sponsor logo image */}
                <img src={image} alt={`Sponsor ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Second group of images for continuous scrolling effect */}
          <div aria-hidden className="group">
            {/* Loop through the images array again, this time with an adjusted key for a unique value */}
            {images.map((image, index) => (
              <div className="card" key={index + images.length}>
                {/* Sponsor logo image */}
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
