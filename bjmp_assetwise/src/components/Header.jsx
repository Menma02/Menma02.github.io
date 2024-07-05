import { FaArrowRight } from 'react-icons/fa'; 

export const Header = () => {
  return (
    <header>
        <div className="w-full h-60vh">
          <div className="rounded-lg mx-auto my-20 p-14 lg:shadow-xl container sm:shadow-none">
              <h1 className="text-blue text-3xl font-bold tracking-wider">
                Asset<span className="text-orange">Wise:</span>
              </h1>
              <p className="mx-0 mt-10 text-md sm:text-lg my-25 lg:text-2xl">
                A <span className='text-orange font-semibold'>Property Record Management System</span> for the Bureau of Jail Management and Penology (BJMP) 
                in the Philippines is crucial for efficiently managing resources in correctionalfacilities. 
                The PRMS tracks and safeguards assets, serving as the backbone for monitoring property use across the BJMP's operations.
              </p>
            <div className="flex justify-end">
                <a className="flex items-center text-white bg-blue mt-8 p-2 lg:rounded hover:bg-orange" href="/about">
                  Read me <FaArrowRight className="ml-2 text-white" />
                </a>
            </div>
          </div>
        </div>
    </header>

  
  );
}

export default Header;
