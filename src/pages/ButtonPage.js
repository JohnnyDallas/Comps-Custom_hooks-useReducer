import Button from "../components/Button";  //11
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';  //20 import icons from react icons

function ButtonPage() {    
    const handleClick = () => {};
    
    return <div>
        <div>
        <Button 
            success 
            rounded 
            className="mb-5" 
            onClick={handleClick}
            >
            <GoBell />
            Click me!!
        </Button>                           {/* 12 */}
        </div>
        <div>
            <Button danger onMouseEnter={handleClick}>
                <GoCloudDownload />
                Buy Now!
            </Button>       
        </div>
        <div>
            <Button warning onMouseLeave={handleClick}>
                <GoDatabase />
                See Deal!
            </Button>       
        </div>
        <div>
            <Button secondary>
                Hide Ads!
            </Button>       
        </div>
        <div>
            <Button primary rounded>
                Something
            </Button>       
        </div>
    </div>;
}

export default ButtonPage; //8