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
class="remixicon ri-signal-cellular-1-line {customClass}"
{...$$restProps}
>
<path d="M2 13H8V21H2V13ZM16 19H22V21H16V19ZM9 19H15V21H9V19ZM4 15V19H6V15H4Z"></path>
</svg>
