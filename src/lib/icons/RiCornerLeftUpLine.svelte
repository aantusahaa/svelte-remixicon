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
class="remixicon ri-corner-left-up-line {customClass}"
{...$$restProps}
>
<path d="M10.0003 19.0003L19.0002 19.0004L19.0002 17.0004L12.0003 17.0003L12.0002 6.82845L15.9499 10.7782L17.3642 9.36396L11.0002 3L4.63623 9.36396L6.05044 10.7782L10.0002 6.8284L10.0003 19.0003Z"></path>
</svg>
