import { useState, useRef, useEffect } from 'react';
import CloseSvg from '../../assets/8542462_window_close_icon.svg';
type CardProps = {
  card: {
    title: string;
    image: string;
    description: string;
  };
};

const Card = ({ card }: CardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, []);

  const clickOutside = (event: MouseEvent) => {
    console.log('event: ', event.target);
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <p className="title_card">{'card.title'}</p>
        <div className="card_info">
          <img src={card} className="card_image" alt="card" onClick={handleImageClick} />
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal_content" ref={modalRef}>
            <div className="close">
              <img className="closeImg" src={CloseSvg} alt="close" onClick={closeModal} />
            </div>
            <h2>{'card.title'}</h2>
            <img src={card} alt="card" />
            <p>{'crd.description'}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
