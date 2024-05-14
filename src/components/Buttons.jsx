const Buttons = ({label, iconUrl}) => {
  return (
    <button
      className="flex justify-center
     items-center gap-2 px-7 py-4 font-montserrat
      text-lg leading-none bg-orange-400 rounded-full text-white border-orange-400"
    >
      {label}
      <img
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 rounded-full h5 w-5"
      />
    </button>
  )
}

export default Buttons
