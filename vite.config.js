
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add all Solana wallet adapter packages
        '@solana/wallet-adapter-react',
        '@solana/wallet-adapter-base',
        '@solana/wallet-adapter-wallets',
        '@solana/wallet-adapter-react-ui',
        '@solana/web3.js',
        // Add any other Solana packages you're using
      ]
    }
  },
  optimizeDeps: {
    exclude: [
      // Exclude these from dependency optimization
      '@solana/wallet-adapter-react',
      '@solana/wallet-adapter-base', 
      '@solana/wallet-adapter-wallets',
      '@solana/wallet-adapter-react-ui',
      '@solana/web3.js'
    ]
  }
})
