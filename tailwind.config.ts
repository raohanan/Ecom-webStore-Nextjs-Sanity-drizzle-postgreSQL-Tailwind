import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    colors:{
      primaryWhite:"#FFECE3",
      opacityDownColor:"#ffffffba",
      col1:"#D6D6D8",
      col2:"#EFE1C7",
      col3:"#D6D6D8",
      col4:"#212121",
    }
    },
  },
  plugins: [],
}
export default config
