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
class="remixicon ri-arrow-right-up-long-fill {customClass}"
{...$$restProps}
>
<path d="M4.22173 18.3642L5.63574 19.7784L15.2427 10.1716L19.071 14L19.071 4.92892L9.99999 4.92893L13.8284 8.75738L4.22173 18.3642Z"></path>
</svg>
