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
class="remixicon ri-expand-horizontal-fill {customClass}"
{...$$restProps}
>
<path d="M0.5 12L5.44975 7.05029L5.44876 11H10V13H5.44826L5.44727 16.9473L0.5 12ZM14 13H18.5501L18.55 16.9493L23.5 11.9996L18.5503 7.0498L18.5502 11H14V13Z"></path>
</svg>
