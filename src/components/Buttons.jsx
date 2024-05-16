const Buttons = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    // <button
    //   className={`flex justify-center
    //  items-center gap-2 px-7 py-4 font-montserrat
    //   text-lg leading-none rounded-full
    //   ${
    //     backgroundColor
    //       ? `${backgroundColor} ${textColor} ${borderColor}`
    //       : "bg-orange-400 text-white border-orange-400 "
    //   }`}
    // >
    //   {label}
    //   {iconUrl && (
    //     <img
    //       src={iconUrl}
    //       alt="arrow right icon"
    //       className="ml-2 rounded-full h5 w-5"
    //     />
    //   )}
    // </button>
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-orange-400 text-white border-orange-400"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  )
}

export default Buttons
