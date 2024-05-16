import {arrowRight} from "../assets/icons"
import {offer} from "../assets/images"
import Buttons from "../components/Buttons"

const SpacialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-orange-400"> Spacial </span> Offer
        </h2>
        <p className="f mt-4 lg:max-w-lg info-text font-montserrat">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <p className="mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Buttons label="Shop Now" iconUrl={arrowRight} />
          <Buttons
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-500"
            textColor="text-slate-400"
          />
        </div>
      </div>
    </section>
  )
}

export default SpacialOffers
