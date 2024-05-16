import Buttons from "../components/Buttons"
import {arrowRight} from "../assets/icons"
import {shoes, statistics} from "../constants"
import {bigShoe1} from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import {useState} from "react"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
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
        <p className="text-xl font-montserrat text-orange-400">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-orange-400 inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Buttons label="Show Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div className="" key={index}>
              <p className="text-4xl font-palanquin  font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 flex justify-center items-center 
      xl:min-h-screen smax-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="shoe collections"
          width={610}
          height={510}
          className="object-contain relative z-10"
        />
        <div
          className="flex sm:gap-6 gap-4 absolute 
      -bottom-[5%] sm:left-[10%] max-sm:px-6"
        >
          {shoes.map((shoe, index) => (
            <div className="" key={index}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImg={shoe => setBigShoeImg(shoe)}
                bigShoeImg={bigShoe1}
                // bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
