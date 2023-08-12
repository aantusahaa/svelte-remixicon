# svelte-remixicon: A vibrant icon library for your Svelte/SvelteKit app

If you're looking for a way to add visually stunning icons to your Svelte/SvelteKit project, you're in luck! `svelte-remixicon` is a comprehensive icon library built with the popular [Remix Icon](https://github.com/Remix-Design/remixicon) pack. With a total of 2537 icons available, you'll have plenty of options to choose from to bring some color and personality to your app.

## Easy installation

Getting started with `svelte-remixicon` is a breeze. All you have to do is run the following command:

```bash
npm install --save-dev svelte-remixicon
```

## Simple usage

Using `svelte-remixicon` couldn't be simpler. Just import the icons you want to use, and you're ready to go! For example:

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

And that's it! You can check out all the available icons on the [Remix Icon website](https://remixicon.com/).

### Custom styling

If you want to customize the appearance of your icons, you can easily do so by adding your own classes to the icon components. For example:

```html
<style>
  :global(svg.xyz) {
    margin-block: 3rem;
  }
</style>

<RemixiconLine class="xyz" />
```

## Component naming

To make it easy to find the icons you need, we've used the same names as the original Remix Icon library, with one exception. We've modified the names slightly to use PascalCase and remove the `ri-` prefix. For example:

- `ri-home-line` ⇒ `HomeLine`
- `ri-message-3-fill` ⇒ `Message3Fill`
- and so on...

However, four components were named slightly differently because their PascalCase version was not a valid identifier.

- `ri-24-hours-line` ⇒ `TwentyFourHoursLine`
- `ri-24-hours-fill` ⇒ `TwentyFourHoursFill`
- `ri-4k-line` ⇒ `FourKLine`
- `ri-4k-fill` ⇒ `FourKFill`

And this one because there are two icons with the name `bookmark` and `book-mark`.

- `ri-book-mark-fill` ⇒ `BookBookMarkFill`
- `ri-book-mark-line` ⇒ `BookBookMarkLine`

## Available props

Each icon component comes with a range of available props to customize its appearance. These include:

| prop name | default value  | usable value                                | description                                     |
| --------- | -------------- | ------------------------------------------- | ----------------------------------------------- |
| size      | `1em`          | any valid `width/height` attribute          | determines the `width` and `height` of the icon |
| color     | `currentColor` | any valid `color` value for svg             | determines the `fill` of the icon               |
| class     | `''`           | any valid string for html `class` attribute | custom class for custom styling                 |

`$$restProps` was also passed down.

### Forwarded event

svelte-remixicon components also forward the following events for you to use in your app:

- on:click

## License

`svelte-remixicon` is licensed under the [MIT License](https://github.com/aantusahaa/svelte-remixicon/blob/main/LICENSE).
