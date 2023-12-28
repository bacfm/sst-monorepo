import { SSTConfig } from 'sst'
import WebSPAStack from './stacks/WebSPA';
import WebSSRStack from './stacks/WebSSR';

export default {
  config() {
    return {
      name: "platform",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.stack(WebSSRStack).stack(WebSPAStack)
  }
} satisfies SSTConfig;
