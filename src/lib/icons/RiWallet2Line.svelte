<script lang="ts">
export let size = '1em';
export let color = 'currentColor';
export let label= '';
let customClass = '';
export { customClass as class };
</script>

<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width={size}
height={size}
fill={color}
aria-label={label ? label : undefined}
aria-hidden={!label ? 'true' : undefined}
role={label ? 'img' : undefined}
class="remixicon ri-wallet-2-line {customClass}"
{...$$restProps}
>
<path d="M20.0049 7V5H4.00488V19H20.0049V17H12.0049C11.4526 17 11.0049 16.5523 11.0049 16V8C11.0049 7.44772 11.4526 7 12.0049 7H20.0049ZM3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3ZM13.0049 9V15H20.0049V9H13.0049ZM15.0049 11H18.0049V13H15.0049V11Z"></path>
</svg>
