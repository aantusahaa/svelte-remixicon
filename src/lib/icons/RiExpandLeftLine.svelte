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
class="remixicon ri-expand-left-line {customClass}"
{...$$restProps}
>
<path d="M10.0711 4.9292L11.4853 6.34341L6.8284 11.0003L16.0003 11.0004L16.0003 13.0004L6.82845 13.0003L11.4853 17.6571L10.0711 19.0713L3 12.0003L10.0711 4.9292ZM18.0002 19.0002V5.00021H20.0002V19.0002H18.0002Z"></path>
</svg>
