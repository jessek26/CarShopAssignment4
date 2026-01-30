import './Hero.css'

function Hero({lotPic, welcome, caption}) {
    return(
        <div className="hero-banner">
                <img className="lot-pic" src={lotPic} alt="" />
                <h1 className="hero-welcome">{welcome}</h1>
                <p className="hero-caption">{caption}</p>
                <button className="hero-btn">Shop Now</button>
        </div>
    )
}

export default Hero;