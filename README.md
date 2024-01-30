# svelte-remixicon: A vibrant icon library for your Svelte/SvelteKit app

If you're looking for a way to add visually stunning icons to your Svelte/SvelteKit project, you're in luck! `svelte-remixicon` is a comprehensive icon library built with the popular [Remix Icon](https://github.com/Remix-Design/remixicon) pack. With a total of 2736 icons available, you'll have plenty of options to choose from to bring some color and personality to your app.

## Easy installation

Getting started with `svelte-remixicon` is a breeze. All you have to do is run the following command:

```bash
npm install --save-dev svelte-remixicon
```

## Simple usage

Using `svelte-remixicon` couldn't be simpler. Just import the icons you want to use, and you're ready to go! For example:

```html
<script>
  import { RiRemixiconLine, RiRemixiconFill } from 'svelte-remixicon';
</script>

<!-- Or (Recommended for faster compilation in dev mode)-->

<script>
  import RiRemixiconLine from 'svelte-remixicon/RiRemixiconLine.svelte';
  import RiRemixiconFill from 'svelte-remixicon/RiRemixiconLineFill.svelte';
</script>

Almost every icon has two variants. One is line: <RiRemixiconLine /> and the
other is fill: <RiRemixiconFill />
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

<RiRemixiconLine class="xyz" />
```

You will also find the class `remixicon` and `ri-<icon-name>` on the svg element by default. You can use them to style the icons as well.

## Component naming

To make it easy to find the icons you need, we've used the same names as the original Remix Icon library. For example:

- `ri-home-line` ⇒ `RiHomeLine`
- `ri-message-3-fill` ⇒ `RiMessage3Fill`
- and so on...

## Available props

Each icon component comes with a range of available props to customize its appearance. These include:

| prop name | default value  | usable value                                | description                                                                                                                                                                                                                     |
| --------- | -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| size      | `1em`          | any valid `width/height` attribute          | determines the `width` and `height` of the icon                                                                                                                                                                                 |
| color     | `currentColor` | any valid `color` value for svg             | determines the `fill` of the icon                                                                                                                                                                                               |
| class     | `''`           | any valid string for html `class` attribute | custom class for custom styling                                                                                                                                                                                                 |
| label     | `''`           | any string to be used as `aria-label`       | should be used when the svg icon is used as an image/graphic element. It will also add `role="img"` to the svg element. If not passed then `aria-hidden="true"` will be added to the svg element to hide it from screen readers |

`$$restProps` was also passed down.

## Using events

The icon components themselves do not propagate events. Non-interactive elements should not have such events that rely on user interaction. If you wish to capture a `click` event on an icon, it is recommended to enclose the icon within a `button` or `a` tag and attach the event handler to that container.

```html
<script>
  import RiRemixiconLine from 'svelte-remixicon/RiRemixiconLine.svelte';

  function handleClick() {
    console.log('Icon clicked!');
  }
</script>

<button on:click="{handleClick}">
  <RiRemixiconLine />
</button>
```

## License

`svelte-remixicon` is licensed under the [MIT License](https://github.com/aantusahaa/svelte-remixicon/blob/main/LICENSE).
