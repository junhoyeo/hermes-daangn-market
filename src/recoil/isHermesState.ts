import { atom } from 'recoil';

import localStorageEffect from './effects/localStorageEffect';

const key = 'isHermes';

export default atom<boolean>({
  key,
  default: false,
  effects_UNSTABLE: [localStorageEffect(key)],
});
