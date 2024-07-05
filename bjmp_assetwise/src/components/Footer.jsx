import logoImg from '../images/aw_logo.png';
import bjmplogo from '../images/bjmp-logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue h-70vh">
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-start py-4 lg:p-14">
                <img src={logoImg} alt="logoImg" className="ml-3 w-12 h-12 mr-2 lg:w-16 lg:h-16" />
                <h1 className="text-white text-3xl tracking-wide">
                    Asset<span className="text-orange">Wise</span>
                </h1>
            </div>
        <div className="flex items-center justify-start lg:pl-14">
            <img src={bjmplogo} alt="logoImg" className="ml-3 w-12 h-12 mr-2 lg:ml-4 lg:w-14 lg:h-14" />  
                <h1 className="text-white text-sm lg:text-xl tracking-wide">Bureau of Jail Management 
                <br/>and Penology</h1>      
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