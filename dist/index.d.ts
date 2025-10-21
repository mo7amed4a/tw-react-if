import { type ReactNode } from "react";
type Mode = "display" | "tailwind" | "remove";
interface IFProps {
    condition: boolean;
    children: ReactNode;
    /**
     * Hiding mode:
     * - "display"  → hide using CSS `display: none`
     * - "tailwind" → hide using Tailwind's `hidden` class
     * - "remove"   → completely remove element from the DOM
     */
    mode?: Mode;
    /**
     * The display type when visible
     * Default: "block"
     */
    display?: string;
}
export declare function IF({ condition, children, mode, display, }: IFProps): import("react/jsx-runtime").JSX.Element | null;
export default IF;
