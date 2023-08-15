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
class="remixicon ri-page-separator {customClass}"
{...$$restProps}
>
<path d="M17 21V17H7V21H5V16C5 15.4477 5.44772 15 6 15H18C18.5523 15 19 15.4477 19 16V21H17ZM7 3V7H17V3H19V8C19 8.55228 18.5523 9 18 9H6C5.44772 9 5 8.55228 5 8V3H7ZM2 9L6 12L2 15V9ZM22 9V15L18 12L22 9Z"></path>
</svg>
