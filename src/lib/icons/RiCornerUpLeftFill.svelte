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
class="remixicon ri-corner-up-left-fill {customClass}"
{...$$restProps}
>
<path d="M19.0003 10.0003L19.0004 19.0001L17.0004 19.0002L17.0003 12.0003L9.41421 12.0002V17.4144L3 11.0001L9.41421 4.58594L9.41421 10.0002L19.0003 10.0003Z"></path>
</svg>
