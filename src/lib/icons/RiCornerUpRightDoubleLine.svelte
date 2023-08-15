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
class="remixicon ri-corner-up-right-double-line {customClass}"
{...$$restProps}
>
<path d="M4.00014 10.0003L4 19.0002L6 19.0002L6.00011 12.0003L12.1719 12.0002L8.22222 15.9499L9.63643 17.3642L16.0004 11.0002L9.63643 4.63623L8.22221 6.05044L12.172 10.0002L4.00014 10.0003ZM15.2506 4.63623L13.8364 6.05044L18.7861 11.0002L13.8364 15.9499L15.2506 17.3642L21.6145 11.0002L15.2506 4.63623Z"></path>
</svg>
