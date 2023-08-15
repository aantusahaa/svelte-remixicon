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
class="remixicon ri-corner-up-left-double-fill {customClass}"
{...$$restProps}
>
<path d="M20.0005 19.0001 20.0004 10.0003 14.4143 10.0002V4.58594L8.00014 11.0001 14.4143 17.4144V12.0002L18.0004 12.0003 18.0005 19.0002 20.0005 19.0001ZM10.1639 6.05029 8.7497 4.63608 2.38574 11 8.7497 17.364 10.1639 15.9498 5.21417 11 10.1639 6.05029Z"></path>
</svg>
