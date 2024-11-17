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
        <p>Here you can find out everything about us: our cars, our sub-teams and our milestones. Just click through!</p>
        <div className="options" >
          <a href="">
            <div className="option o1">
              <div className="option-info">
                <div className="option-title">
                  <img src="/images/icons/racing-car.png"/>
                  <h2>Our Race car`s</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus aliquid perspiciatis corrupti repellendus, repudiandae quaerat temporibus velit. Atque aliquam magnam cumque beatae nihil? Omnis commodi vitae quod repudiandae voluptatem?</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="option o2">
              <div className="option-info">
                <div className="option-title">
                  <img src="/images/icons/group-chat.png"/>
                  <h2>Our Team</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus aliquid perspiciatis corrupti repellendus, repudiandae quaerat temporibus velit. Atque aliquam magnam cumque beatae nihil? Omnis commodi vitae quod repudiandae voluptatem?</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="option o3">
              <div className="option-info">
                <div className="option-title">
                  <img src="/images/icons/history.png"/>
                  <h2>Our History</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus aliquid perspiciatis corrupti repellendus, repudiandae quaerat temporibus velit. Atque aliquam magnam cumque beatae nihil? Omnis commodi vitae quod repudiandae voluptatem?</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="option o4">
              <div className="option-info">
                <div className="option-title">
                  <img src="/images/icons/resume.png"/>
                  <h2>Your Application</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos possimus aliquid perspiciatis corrupti repellendus, repudiandae quaerat temporibus velit. Atque aliquam magnam cumque beatae nihil? Omnis commodi vitae quod repudiandae voluptatem?</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs