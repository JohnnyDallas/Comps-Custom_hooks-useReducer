import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';


function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };


    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    
    </Modal>


    return (
    <div> 
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}               
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa magna, sodales in diam id, congue dictum diam. Nulla eu metus nulla. Vivamus venenatis sem nec ultricies sollicitudin. Integer aliquam, leo at ullamcorper vehicula, ex mauris ullamcorper urna, quis convallis lectus nulla vitae mauris. Quisque quis congue massa, sit amet sollicitudin neque. Phasellus sit amet eros leo. In fringilla nisl non tortor vestibulum laoreet. Vivamus vulputate felis vel est porta pellentesque. Nunc pulvinar quis ipsum nec imperdiet. Proin hendrerit est vitae malesuada consectetur. Ut maximus lobortis lorem. Duis nec erat urna. Ut fringilla turpis ac dui ullamcorper, a dictum elit ultricies. Aliquam in ligula non libero interdum sagittis. Pellentesque non porttitor velit. Integer porttitor mollis enim, nec condimentum leo consequat ac.
        </p>        
    </div>
  );
}

export default ModalPage;