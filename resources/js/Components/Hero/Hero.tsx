import arrow_icon from "../Frontend_Assets/arrow.png";
import hand_icon from "../Frontend_Assets/hand_icon.png";
import hero_image from "../Frontend_Assets/hero_image.png";
import "./Hero.css";

export const Hero = () => {
    return (
        <div className="pt-6">
            <div className="hero">
                <div className="hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>

                    <div className="hero-latest-btn">
                        <div>Latest Collection </div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={hero_image} alt="" />
                </div>
            </div>
        </div>
    );
};
