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
class="remixicon ri-arrow-right-down-long-fill {customClass}"
{...$$restProps}
>
<path d="M5.63578 4.22174L4.22157 5.63575L13.8284 15.2427L10 19.0711L19.0711 19.0711L19.0711 10L15.2426 13.8285L5.63578 4.22174Z"></path>
</svg>
