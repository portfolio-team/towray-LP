import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "tworay-lp",
  outDir: './dist/static',
  routes: {
  },
  puppeteerLaunchOptions: {
    executablePath: '',
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  },
};