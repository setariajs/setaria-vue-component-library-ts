import { Setaria, } from '@setaria/setaria-ts'
import { setupUI} from './ui/'

import type { FrameworkConfig, ViteEnv } from '@setaria/setaria-ts'

export class Framework extends Setaria {

  constructor(config: FrameworkConfig, envParmas: ViteEnv) {
    super(config, envParmas);
    setupUI(this.app);
  }

}


export * from './store/'


