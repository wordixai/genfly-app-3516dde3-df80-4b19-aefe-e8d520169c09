import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.farmersmanor.app',
  appName: '农夫庄园',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#4CAF50",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    }
  }
};

export default config;