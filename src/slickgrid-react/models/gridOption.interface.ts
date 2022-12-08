import { GridOption as UniversalGridOption } from '@slickgrid-universal/common';
import * as i18next from 'i18next';

export interface GridOption extends UniversalGridOption {
  /** I18N translation service instance */
  i18n?: i18next.i18n;
}
