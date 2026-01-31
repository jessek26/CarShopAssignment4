import './Hero.css'
import { Link } from 'react-router-dom';

function Hero({lotPic, welcome, caption}) {
    return(
        <div className="hero-banner">
                <img className="lot-pic" src={lotPic} alt="" />
                <h1 className="hero-welcome">{welcome}</h1>
                <p className="hero-caption">{caption}</p>
                <Link to="/products">
                <button className="hero-btn">Shop Now</button>
                </Link>
        </div>
    )
}

export default Hero;