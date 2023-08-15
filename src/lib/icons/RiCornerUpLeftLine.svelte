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
class="remixicon ri-corner-up-left-line {customClass}"
{...$$restProps}
>
<path d="M19.0003 10.0003L19.0004 19.0002L17.0004 19.0002L17.0003 12.0003L6.82845 12.0002L10.7782 15.9499L9.36396 17.3642L3 11.0002L9.36396 4.63623L10.7782 6.05044L6.8284 10.0002L19.0003 10.0003Z"></path>
</svg>
