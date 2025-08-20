import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'heading': ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5' }],
				'sm': ['0.875rem', { lineHeight: '1.6' }],
				'base': ['1rem', { lineHeight: '1.7' }],        // 16px body text
				'lg': ['1.125rem', { lineHeight: '1.7' }],      // H6
				'xl': ['1.25rem', { lineHeight: '1.6' }],       // H5
				'2xl': ['1.5rem', { lineHeight: '1.5' }],       // H4
				'3xl': ['1.75rem', { lineHeight: '1.4' }],      // H3
				'4xl': ['2rem', { lineHeight: '1.3' }],         // H2
				'5xl': ['2.5rem', { lineHeight: '1.2' }],       // H1
				'6xl': ['3rem', { lineHeight: '1.1' }],         // Display Large
				'7xl': ['3.5rem', { lineHeight: '1' }],         // Display XL
				'8xl': ['4rem', { lineHeight: '1' }],           // Display 2XL
				'9xl': ['4.5rem', { lineHeight: '1' }],         // Display 3XL
			},
			spacing: {
				'18': '4.5rem',
				'72': '18rem',
				'84': '21rem',
				'96': '24rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Softened Pink #D47BB8
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))', // Medium Purple #AC44F2
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))', // Light Gray #F2F2F2
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))', // Dark Blue #4F45E8/#4E4BA6
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						textShadow: '0 0 20px hsl(var(--primary) / 0.5)'
					},
					'50%': {
						textShadow: '0 0 30px hsl(var(--primary) / 0.8)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
