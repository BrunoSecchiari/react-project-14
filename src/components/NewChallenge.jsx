import { motion /* stagger,  useAnimate */ } from 'framer-motion';
import { useContext, useRef, useState } from 'react';
import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';

const NewChallenge = ({ onDone }) => {
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  /* const [scope, animate] = useAnimate(); */

  const handleSelectImage = (image) => {
    setSelectedImage(image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      /* animate(
        'input, textarea',
        { border: 'solid 1px #990000' },
        {
          type: 'spring',
          duration: 0.5,
          delay: stagger(0.07),
        }
      ); */
      return;
    }

    onDone();
    addChallenge(challenge);
  };

  return (
    <Modal title='New Challenge' onClose={onDone}>
      <form id='new-challenge' onSubmit={handleSubmit} /* ref={scope} */>
        <p>
          <label htmlFor='title'>Title</label>
          <input ref={title} type='text' name='title' id='title' />
        </p>

        <p>
          <label htmlFor='description'>Description</label>
          <textarea ref={description} name='description' id='description' />
        </p>

        <p>
          <label htmlFor='deadline'>Deadline</label>
          <input ref={deadline} type='date' name='deadline' id='deadline' />
        </p>

        <motion.ul
          id='new-challenge-images'
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {images.map((image) => (
            <motion.li
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 1.3, 1] },
              }}
              exit={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 0.7 }}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className='new-challenge-actions'>
          <button type='button' onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewChallenge;
