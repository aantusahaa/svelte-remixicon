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
class="remixicon ri-corner-up-left-double-line {customClass}"
{...$$restProps}
>
<path d="M20.0001 10.0003L20.0003 19.0002L18.0003 19.0002L18.0002 12.0003L11.8283 12.0002L15.7781 15.9499L14.3638 17.3642L7.99988 11.0002L14.3638 4.63623L15.7781 6.05044L11.8283 10.0002L20.0001 10.0003ZM8.7497 4.63623L10.1639 6.05044L5.21417 11.0002L10.1639 15.9499L8.7497 17.3642L2.38574 11.0002L8.7497 4.63623Z"></path>
</svg>
