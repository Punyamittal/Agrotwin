module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5016", // Deep agricultural authority
          50: "#F4F7F1",
          100: "#E8F0E2",
          200: "#D1E1C5",
          300: "#BAD2A8",
          400: "#A3C38B",
          500: "#8CB46E",
          600: "#6B8F51",
          700: "#4A6A34",
          800: "#2D5016",
          900: "#1A3009",
        },
        secondary: {
          DEFAULT: "#4A7C59", // Growth-focused optimism
          50: "#F5F9F6",
          100: "#EBF3ED",
          200: "#D7E7DB",
          300: "#C3DBC9",
          400: "#AFCFB7",
          500: "#9BC3A5",
          600: "#7BA083",
          700: "#5B7D61",
          800: "#4A7C59",
          900: "#2F4F37",
        },
        accent: {
          DEFAULT: "#FFB000", // Genetic breakthrough moments
          50: "#FFFBF0",
          100: "#FFF7E0",
          200: "#FFEFC2",
          300: "#FFE7A3",
          400: "#FFDF85",
          500: "#FFD766",
          600: "#FFCF47",
          700: "#FFC729",
          800: "#FFB000",
          900: "#E09900",
        },
        background: "#FAFBF7", // Clean laboratory canvas
        surface: "#F1F5F0", // Gentle depth for data containers
        text: {
          primary: "#1A1D16", // Extended reading with natural authority
          secondary: "#4A5D42", // Clear hierarchy maintaining organic connection
        },
        success: {
          DEFAULT: "#22C55E", // green-500
          50: "#F0FDF4",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D",
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 4px 12px rgba(45, 80, 22, 0.08)',
        strong: '0 8px 24px rgba(45, 80, 22, 0.12)',
      },
      transitionDuration: {
        fast: '300ms',
        complex: '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      backgroundImage: {
        'molecular-pattern': 'radial-gradient(circle at 25% 25%, rgba(74, 124, 89, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(45, 80, 22, 0.1) 0%, transparent 50%)',
      },
      animation: {
        'molecular-float': 'float 6s ease-in-out infinite',
        'data-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}