/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			zomp: {
			DEFAULT: '#619C91',
			100: '#141f1d',
			200: '#273f3a',
			300: '#3b5e58',
			400: '#4f7d75',
			500: '#619c91',
			600: '#82b0a8',
			700: '#a1c4be',
			800: '#c0d8d3',
			900: '#e0ebe9',
			},
			persian_green: {
			DEFAULT: '#44A096',
			100: '#0e201e',
			200: '#1c403c',
			300: '#29605a',
			400: '#378178',
			500: '#44a096',
			600: '#62bcb1',
			700: '#89cdc5',
			800: '#b0ddd8',
			900: '#d8eeec',
			},
			kelly_green: {
			DEFAULT: '#46AC33',
			100: '#0e230a',
			200: '#1c4515',
			300: '#2a681f',
			400: '#388a29',
			500: '#46ac33',
			600: '#62ca4f',
			700: '#89d87b',
			800: '#b0e5a7',
			900: '#d8f2d3',
			},
			viridian: {
			DEFAULT: '#3D8B72',
			100: '#0c1c17',
			200: '#18372d',
			300: '#245344',
			400: '#316f5b',
			500: '#3d8b72',
			600: '#52b394',
			700: '#7dc6af',
			800: '#a9d9ca',
			900: '#d4ece4',
			},
			rose_quartz: {
			DEFAULT: '#B19F9C',
			100: '#251e1d',
			200: '#4a3d3a',
			300: '#6f5b58',
			400: '#937a76',
			500: '#b19f9c',
			600: '#c0b2af',
			700: '#d0c5c3',
			800: '#e0d8d7',
			900: '#efeceb'
			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}