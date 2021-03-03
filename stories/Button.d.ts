import React from 'react';
export declare const easings: readonly ["ease-in-back", "ease-in-circ", "ease-in-cubic", "ease-in-expo", "ease-in-out-back", "ease-in-out-circ", "ease-in-out-cubic", "ease-in-out-expo", "ease-in-out-quad", "ease-in-out-quart", "ease-in-out-quint", "ease-in-out-sine", "ease-in-quad", "ease-in-quart", "ease-in-quint", "ease-in-sine", "ease-out-back", "ease-out-circ", "ease-out-cubic", "ease-out-expo", "ease-out-quad", "ease-out-quart", "ease-out-quint", "ease-out-sine"];
export declare type Easing = typeof easings[number];
export interface ButtonProps {
    easing: Easing;
    props: any[];
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: React.FC<ButtonProps>;
