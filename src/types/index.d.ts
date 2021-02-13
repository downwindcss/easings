declare module 'postcss-easings' {
  import { easings } from 'postcss-easings';

  type EasingsKeys = keyof easings;
  export var easings: Record<EasingsKeys, string>;
}
