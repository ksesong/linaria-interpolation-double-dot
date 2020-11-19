import { FC } from 'react';
export interface IButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    text?: string;
}
export declare const Button: FC<IButtonProps>;
