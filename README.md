# tw-react-if

A simple and lightweight React component for conditional rendering.  
Supports three modes: CSS display, Tailwind `hidden`, and full removal from the DOM.

## Installation

```bash
bun add tw-react-if
```

or with npm:

```bash
npm install tw-react-if
```

## Usage

```tsx
import { IF } from "tw-react-if";

function App() {
  return (
    <div>
      <IF condition={true} mode="display">
        <p>Visible using CSS display</p>
      </IF>

      <IF condition={false} mode="tailwind">
        <p>Hidden using Tailwind</p>
      </IF>

      <IF condition={false} mode="remove">
        <p>This will not be rendered at all</p>
      </IF>
    </div>
  );
}
```

## Props

| Name       | Type      | Default     | Description |
|-------------|-----------|-------------|--------------|
| `condition` | `boolean` | `required`  | The condition to render or hide children. |
| `mode`      | `"display"`, `"tailwind"`, `"remove"` | `"display"` | Defines the hiding method. |
| `display`   | `string`  | `"block"`   | The display style when visible. |

## License

MIT © Mohamed Abdelrahman

[![Follow @mo7amed4a on GitHub](https://img.shields.io/github/followers/mo7amed4a?label=Follow&style=social)](https://github.com/mo7amed4a)
