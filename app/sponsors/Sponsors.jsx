import "./sponsors.css"; // Import the CSS for styling
import SponsorForm from "./SponsorForm"; // Import the SponsorForm component

// Arrays of sponsor images categorized by tiers
const goldSponsors = [
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/f/ff/RedBull_logo.svg",
];

const platinumSponsors = [
  "https://upload.wikimedia.org/wikipedia/commons/3/35/Bosch-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
];

const silverSponsors = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Honda_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/34/Nike_logo.svg",
];

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
        {/* Gold Tier Sponsors */}
        <h2 className="sponsor-tier-title gold">Gold Sponsors</h2>
        <div className="sponsor-grid">
          {goldSponsors.map((image, index) => (
            <div className="sponsor-card" key={index}>
              <img src={image} alt={`Gold Sponsor ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Platinum Tier Sponsors */}
        <h2 className="sponsor-tier-title platinum">Platinum Sponsors</h2>
        <div className="sponsor-grid">
          {platinumSponsors.map((image, index) => (
            <div className="sponsor-card" key={index}>
              <img src={image} alt={`Platinum Sponsor ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Silver Tier Sponsors */}
        <h2 className="sponsor-tier-title silver">Silver Sponsors</h2>
        <div className="sponsor-grid">
          {silverSponsors.map((image, index) => (
            <div className="sponsor-card" key={index}>
              <img src={image} alt={`Silver Sponsor ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

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
  );
};

export default Sponsors;