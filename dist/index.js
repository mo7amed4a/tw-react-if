import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
export function IF({ condition, children, mode = "display", display = "block", }) {
    // Completely remove the element from the DOM
    if (mode === "remove") {
        return condition ? _jsx(_Fragment, { children: children }) : null;
    }
    // Use Tailwind classes for visibility
    if (mode === "tailwind") {
        return (_jsx("div", { className: condition ? "" : "hidden", style: { display: condition ? display : undefined }, children: children }));
    }
    // Default mode: use CSS display
    return (_jsx("div", { style: { display: condition ? display : "none" }, children: children }));
}
export default IF;
