import WorkThumbChesmar from "@/public/assets/images/work/portfolio-chesmar.png";
import WorkThumbBaytown from "@/public/assets/images/work/portfolio-baytown-crossings.png";
import WorkThumbBoardwalk from "@/public/assets/images/work/portfolio-katy-boardwalk.png";
import PortfolioThumb from "./PortfolioThumb";

export default function PortfolioListing(){
    return (
        <div className='py-20 flex'>
          <PortfolioThumb image={WorkThumbChesmar} title='Chesmar Homes' colors={['#dcf7ef', '#71988d']} />
          <PortfolioThumb image={WorkThumbBaytown} title='Baytown Crossings' colors={['#f3dbc4', '#a9794c']} />
          <PortfolioThumb image={WorkThumbBoardwalk} title='Katy Boardwalk' colors={['#63513e', '#2b1e10']} />
        </div>
    )
}