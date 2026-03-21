import photo from '../assets/saurabh_image.jpg'
const Header = () => {
  return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
  <div>
    <div className="text-4xl font-bold">John Doe</div>
      <div className="text-2xl">Full stack</div>
  </div>
  <img  className="rounded-full w-16 " src={photo} alt="saurabh_image" />
  </header>
}

export default Header;