import React from 'react';
// import './button.css';

// export interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

export const easings = [
  'ease-in-back',
  'ease-in-circ',
  'ease-in-cubic',
  'ease-in-expo',
  'ease-in-out-back',
  'ease-in-out-circ',
  'ease-in-out-cubic',
  'ease-in-out-expo',
  'ease-in-out-quad',
  'ease-in-out-quart',
  'ease-in-out-quint',
  'ease-in-out-sine',
  'ease-in-quad',
  'ease-in-quart',
  'ease-in-quint',
  'ease-in-sine',
  'ease-out-back',
  'ease-out-circ',
  'ease-out-cubic',
  'ease-out-expo',
  'ease-out-quad',
  'ease-out-quart',
  'ease-out-quint',
  'ease-out-sine',
] as const;

// Gettings types from the Easings array
// https://steveholgado.com/typescript-types-from-arrays/
export type Easing = typeof easings[number];

export interface ButtonProps {
  easing: Easing;
  children: string;
  props: any[];
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  // primary = false,
  // size = 'medium',
  // backgroundColor,
  // label,
  easing,
  children,
}) => {
  return (
    <button
      type="button"
      className={`transition duration-500 ${easing} transform hover:scale-110 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md`}
    >
      {children}
    </button>
  );

  // const mode = primary
  //   ? 'storybook-button--primary'
  //   : 'storybook-button--secondary';
  // return (
  //   <button
  //     type="button"
  //     className={[
  //       'text-3xl',
  //       'text-pink-500',
  //       'storybook-button',
  //       `storybook-button--${size}`,
  //       mode,
  //     ].join(' ')}
  //     style={{ backgroundColor }}
  //     {...props}
  //   >
  //     {label}
  //   </button>
  // );
};
