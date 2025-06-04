import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  content:[

  ],
  theme : {
    extend:{
      colors:{
        'blue-dianne':{
          900:'#1D535D',
        }
      }

    },

  },
  plugins: [react(),
  tailwindcss(),],
  
})
