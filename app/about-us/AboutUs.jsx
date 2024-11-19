import "./about-us.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="main-about">
        <Image
          src="/images/logo-tus-blue-true.png"
          alt="Description"
          width={320}
          height={50}
          className="img-logo"
        />
        <p>
          Here you can find out everything about us: our cars, our sub-teams and
          our milestones. Just click through!
        </p>
        <div className="options">
          {/* Option 1 */}
          <a href="">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/racing-car.png"
                    alt="racing-car"
                    loading="lazy"
                  />
                </div>
                <h2>Our Race Cars</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>

          {/* Option 2 */}
          <a href="">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/group-chat.png"
                    alt="group-chat"
                    loading="lazy"
                  />
                </div>
                <h2>Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>

          {/* Option 3 */}
          <a href="">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/history.png"
                    alt="history"
                    loading="lazy"
                  />
                </div>
                <h2>Our History</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>

          {/* Option 4 */}
          <a href="">
            <div className="option">
              <div className="option-info">
                <div className="option-title">
                  <img
                    src="/images/icons/resume.png"
                    alt="resume"
                    loading="lazy"
                  />
                </div>
                <h2>Your Application</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  possimus aliquid perspiciatis corrupti repellendus,
                  repudiandae quaerat temporibus velit. Atque aliquam magnam
                  cumque beatae nihil? Omnis commodi vitae quod repudiandae
                  voluptatem?
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
