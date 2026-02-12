
const SideBar = ({isOpen}: {isOpen: boolean}) => {
    console.log('side ', isOpen)
  return (
    <div className={`fixed z-50 left-0 top-0 w-60 h-screen bg-[#1e293b] p-5 text-white transform transition-transform duration-300 ease-in-out ${isOpen? 'translate-x-0': '-translate-x-full'}`}>
      <h2 className='mb-10 mt-10 -ml-16 font-bold'>BentoVeda</h2>
      <ul className='p-0 list-none flex flex-col items-start ml-5'>
        <li className='mt-4 mr-0'>Dashboard</li>
        <li className='mt-4 mr-0'>Orders</li>
        <li className='mt-4 mr-0'>Profile</li>
      </ul>
    </div>
  );
}

export default SideBar