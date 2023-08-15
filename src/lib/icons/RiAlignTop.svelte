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
class="remixicon ri-align-top {customClass}"
{...$$restProps}
>
<path d="M3 3H21V5H3V3ZM8 11V21H6V11H3L7 7L11 11H8ZM18 11V21H16V11H13L17 7L21 11H18Z"></path>
</svg>
