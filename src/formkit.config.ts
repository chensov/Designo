import { en } from '@formkit/i18n';
import { DefaultConfigOptions } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';
import { genesisIcons } from '@formkit/icons';
import genesis from '@formkit/themes/tailwindcss/genesis';

const config: DefaultConfigOptions = {
  locales: { en },
  locale: 'en',
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(genesis),
  },
};

export default config;
