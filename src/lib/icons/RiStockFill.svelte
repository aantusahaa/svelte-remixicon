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
class="remixicon ri-stock-fill {customClass}"
{...$$restProps}
>
<path d="M8.00488 5.00293H11.0049V14.0029H8.00488V17.0029H6.00488V14.0029H3.00488V5.00293H6.00488V2.00293H8.00488V5.00293ZM18.0049 10.0029H21.0049V19.0029H18.0049V22.0029H16.0049V19.0029H13.0049V10.0029H16.0049V7.00293H18.0049V10.0029Z"></path>
</svg>
