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
class="remixicon ri-cpu-fill {customClass}"
{...$$restProps}
>
<path d="M14 20H10V22H8V20H5C4.44772 20 4 19.5523 4 19V16H2V14H4V10H2V8H4V5C4 4.44772 4.44772 4 5 4H8V2H10V4H14V2H16V4H19C19.5523 4 20 4.44772 20 5V8H22V10H20V14H22V16H20V19C20 19.5523 19.5523 20 19 20H16V22H14V20ZM7 7V11H11V7H7Z"></path>
</svg>
