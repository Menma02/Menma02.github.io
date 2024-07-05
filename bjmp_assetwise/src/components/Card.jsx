import './card.css';

const Card = () => {
  return (
<card>
    <div className="sm:bg-none lg:bg-card-bg min-h-screen lg:bg-gray flex justify-center items-center mb-20 lg:mb-0">
        <div className="card_container flex flex-col sm:flex-row sm:p-10">
            <div className="card1 flex flex-col items-center sm:items-center mb-4 sm:mb-0 text-black bg-orange transition-transform duration-300 ease-in-out transform lg:hover:scale-110 ">
                <h1>Automated Data Categorization</h1>
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/000000/inspection.png" alt="inspection"/><br/>
                <p className='text-sm font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab eaque assumenda obcaecati magnam eos, suscipit dolore numquam eum consequuntur facilis hic laboriosam dolorum quibusdam voluptatibus sapiente fuga dignissimos odit.</p>
            </div>
            <div className="card2 flex flex-col items-center sm:items-center mb-4 sm:mb-0 text-black bg-blue transition-transform duration-300 ease-in-out transform lg:hover:scale-110">
                <h1>Property Management</h1>
                <img width="30" height="30" src="https://img.icons8.com/ios/50/download--v1.png" alt="download--v1"/><br/>
                <p className='text-sm font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab eaque assumenda obcaecati magnam eos, suscipit dolore numquam eum consequuntur facilis hic laboriosam dolorum quibusdam voluptatibus sapiente fuga dignissimos odit.</p>
            </div>
            <div className="card3 flex flex-col items-center sm:items-center mb-4 sm:mb-0 text-black bg-gray transition-transform duration-300 ease-in-out transform lg:hover:scale-110">
                <h1>Property Registration</h1>
                <img width="30" height="30" src="https://img.icons8.com/sf-regular/48/define-location.png" alt="define-location"/><br/>
                <p className='text-sm font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab eaque assumenda obcaecati magnam eos, suscipit dolore numquam eum consequuntur facilis hic laboriosam dolorum quibusdam voluptatibus sapiente fuga dignissimos odit.</p>
            </div>
        </div>
    </div>
</card>


  )
}

export default Card