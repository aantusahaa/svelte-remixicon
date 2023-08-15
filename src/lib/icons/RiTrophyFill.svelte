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
class="remixicon ri-trophy-fill {customClass}"
{...$$restProps}
>
<path d="M13.0049 16.941V19.0029H18.0049V21.0029H6.00488V19.0029H11.0049V16.941C7.05857 16.4489 4.00488 13.0825 4.00488 9.00293V3.00293H20.0049V9.00293C20.0049 13.0825 16.9512 16.4489 13.0049 16.941ZM1.00488 5.00293H3.00488V9.00293H1.00488V5.00293ZM21.0049 5.00293H23.0049V9.00293H21.0049V5.00293Z"></path>
</svg>
