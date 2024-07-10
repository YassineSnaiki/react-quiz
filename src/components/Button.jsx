/* eslint-disable react/prop-types */



export default function Button({children , className, onClick}) {
  return (
    <button onClick={onClick} className= {`py-4 px-6 bg-white bg-opacity-20 rounded-full font-semibold focus:ring focus:ring-2 ring-white hover:bg-opacity-10 hover:shadow-inner hover:shadow-black  shadow-sm ${className}`}>
        {children}
    </button>
  )
}
