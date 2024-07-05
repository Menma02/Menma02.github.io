import logoImg from '../images/logoImg.png';

const Footer = () => {
  return (
    <footer className="bg-blue h-50vh">
    <div className="flex flex-col h-full">
        <div className="flex items-center justify-start py-4 lg:p-14">
            <img src={logoImg} alt="logoImg" className="ml-3 w-12 h-12 mr-2 lg:w-20 lg:h-20" />
            <h1 className="text-white text-3xl tracking-wide">
                Asset<span className="text-orange">Wise</span>
            </h1>
        </div>
        <div className="mt-auto p-8">
            <p className="text-white text-xs text-center">
                Copyright © 2024 All rights reserved | This prototype is made by Menma & Franz.
            </p>
        </div>
    </div>
</footer>



  )
}

export default Footer