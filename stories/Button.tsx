import React from 'react';

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
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ easing }) => {
  return (
    <button
      type="button"
      className={`
      transition duration-500 ${easing} 
      transform hover:scale-150 
      bg-indigo-600 text-white font-semibold 
      py-4 px-6 w-2/3 rounded-md
      justify-self-center
      align-self-center 
      `}
    >
      {easing}
    </button>
  );
};
