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
class="remixicon ri-corner-up-right-line {customClass}"
{...$$restProps}
>
<path d="M5.00014 10.0003L5 19.0002L7 19.0002L7.00011 12.0003L17.1719 12.0002L13.2222 15.9499L14.6364 17.3642L21.0004 11.0002L14.6364 4.63623L13.2222 6.05044L17.172 10.0002L5.00014 10.0003Z"></path>
</svg>
