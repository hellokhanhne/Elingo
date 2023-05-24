import { useEffect, useRef } from 'react';
import Sound from 'react-native-sound';

const useSound = (media: string) => {
  const sound = useRef<Sound>();

  useEffect(() => {
    const s = new Sound(media, null as any, error => {
      if (error) {
        console.log('error', error);
      }
      sound.current = s;
    });
  }, []);

  return sound;
};

const useCorrectSound = () => {
  return useSound(
    'https://res.cloudinary.com/wonder-place/video/upload/v1683562731/Correct_Audio_e6ab93db9d.mp3',
  );
};

const useIncorrectSound = () => {
  return useSound(
    'https://res.cloudinary.com/wonder-place/video/upload/v1683562731/In_Correct_Audio_76ea916239.mp3',
  );
};

export default useSound;

export { useCorrectSound, useIncorrectSound };
