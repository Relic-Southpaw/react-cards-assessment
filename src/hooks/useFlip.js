import { useState } from 'react';

const useFlip = (faceUp = true) => {
    const [face, setFace] = useState(faceUp);

    const flip = () => {
        setFace(faceUp = !faceUp);
    };

    return [face, flip]
}

export { useFlip }