# svelte-remixicon

An icon library for svelte based on [Remix Icon](https://github.com/Remix-Design/remixicon). Consists of more than 2000 icons.

## Install

```bash
npm install --save-dev svelte-remixicon
```

## Usage

```html
<script>
  import { RemixiconLine, RemixiconFill } from 'svelte-remixicon';
</script>

<!-- OR (Recommended for faster compile) -->

<script>
  import RemixiconLine from 'svelte-remixicon/lib/icons/RemixiconLine.svelte';
  import RemixiconFill from 'svelte-remixicon/lib/icons/RemixiconFill.svelte';
</script>

Almost every icon has two variants. One is line: <RemixiconLine /> and the other
is fill: <RemixiconFill />
```

For all the available icons visit [Remix Icon website](https://remixicon.com/).

### Using Custom Class

```html
<style>
  :global(svg.xyz) {
    margin-block: 3rem;
  }
</style>

<RemixiconLine class="xyz" />
```

## Component Naming

The class name available for each icon (from the website) was converted to PascalCase without the `ri-` prefix and used as the component name.

- `ri-home-line` ⇒ `HomeLine`
- `ri-message-3-fill` ⇒ `Message3Fill`
- and so on...

However, four components were named slightly differently because their PascalCase version was not a valid identifier.

- `ri-24-hours-line` ⇒ `TwentyFourHoursLine`
- `ri-24-hours-fill` ⇒ `TwentyFourHoursFill`
- `ri-4k-line` ⇒ `FourKLine`
- `ri-4k-fill` ⇒ `FourKFill`

## Available Props in Components

| prop name | default value  | usable value                                | description                                     |
| --------- | -------------- | ------------------------------------------- | ----------------------------------------------- |
| size      | `1em`          | any valid `width/height` attribute          | determines the `width` and `height` of the icon |
| color     | `currentColor` | any valid `color` value for svg             | determines the `fill` of the icon               |
| class     | `''`           | any valid string for html `class` attribute | custom class for custom styling                 |

`$$restProps` was also passed down.

### Forwarded event

- on:click

## License

`svelte-remixicon` is licensed under the [MIT License](https://github.com/ABarnob/svelte-remixicon/blob/main/LICENSE).
