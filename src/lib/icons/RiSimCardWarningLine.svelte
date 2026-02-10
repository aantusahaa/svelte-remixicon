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
class="remixicon ri-sim-card-warning-line {customClass}"
{...$$restProps}
>
<path d="M19.707 6.70703C19.8945 6.89453 20 7.14891 20 7.41406V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H15L19.707 6.70703ZM6 20H18V7.8291L14.1709 4H6V20ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"></path>
</svg>
