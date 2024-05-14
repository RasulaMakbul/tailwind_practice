import Buttons from "../components/Buttons"
import {arrowRight} from "../assets/icons"
import {statistics} from "../constants"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col
       justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative xl:w-2/5 flex 
      flex-col justify-center
       items-start w-ful max-xl:padding-x pt-28"
      >
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike </span>Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Buttons label="Show Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div className="" key={index}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
