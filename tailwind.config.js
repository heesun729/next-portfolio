/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                motion: 'motion 0.3s linear infinite alternate',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
