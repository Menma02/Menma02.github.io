/* eslint-disable jsx-a11y/no-distracting-elements */

const Slide = () => {
  return (
<slide>
    <div className="h-25vh">
        <div>
            <marquee width="100%" direction="left" scrollamount="20" className="bg-orange h-max mt-1 tracking-widest">
                <p className="text-8xl text-blue">ASSETWISE <span className="text-white">ASSETWISE </span><span className="text-blue">ASSETWISE</span></p>
            </marquee>
            <marquee width="100%" direction="right" scrollamount="20" className="bg-blue h-max tracking-widest">
                <p className="text-8xl text-orange">ASSETWISE <span className="text-white">ASSETWISE </span><span className="text-orange">ASSETWISE </span></p>
            </marquee>
        </div>
    </div>
</slide>


  )
}

export default Slide