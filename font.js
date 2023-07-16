import { Poppins, Playfair_Display } from '@next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '600',
});

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: '600',
});

export { poppins, playfairDisplay };