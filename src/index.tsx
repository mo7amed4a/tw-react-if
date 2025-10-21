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

export function IF({
  condition,
  children,
  mode = "display",
  display = "block",
}: IFProps) {
  // Completely remove the element from the DOM
  if (mode === "remove") {
    return condition ? <>{children}</> : null;
  }

  // Use Tailwind classes for visibility
  if (mode === "tailwind") {
    return (
      <div
        className={condition ? "" : "hidden"}
        style={{ display: condition ? display : undefined }}
      >
        {children}
      </div>
    );
  }

  // Default mode: use CSS display
  return (
    <div style={{ display: condition ? display : "none" }}>
      {children}
    </div>
  );
}

export default IF;
