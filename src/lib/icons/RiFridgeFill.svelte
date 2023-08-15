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
class="remixicon ri-fridge-fill {customClass}"
{...$$restProps}
>
<path d="M19.998 12V22C19.998 22.5523 19.5503 23 18.998 23H4.99805C4.44576 23 3.99805 22.5523 3.99805 22V12H19.998ZM8.99805 14H6.99805V19H8.99805V14ZM18.998 1C19.5503 1 19.998 1.44772 19.998 2V10H3.99805V2C3.99805 1.44772 4.44576 1 4.99805 1H18.998ZM8.99805 4H6.99805V8H8.99805V4Z"></path>
</svg>
