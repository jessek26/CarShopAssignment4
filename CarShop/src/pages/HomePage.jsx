import Hero from '../components/Hero';

function HomePage(){
    return (
      <div className="hero">
        <Hero
        lotPic="https://di-uploads-pod12.dealerinspire.com/automotiveavenue/uploads/2021/08/header.jpg"
        welcome="Welcome to Jesse's Car Shop"
        caption="Shop Jesse's inventory online!"></Hero>
          <div className="intro">
            <h3>Why Shop With Us?</h3>
            <p>At Jesse's Car Shop, we believe buying a car should be exciting, not stressful. As a locally owned business, we treat every customer like a neighbor. We offer transparent pricing, a hand-picked inventory, and a commitment to quality that you won't find at the big dealerships.</p>
          </div>
      </div>
    )
}

export default HomePage; 