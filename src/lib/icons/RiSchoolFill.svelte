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
class="remixicon ri-school-fill {customClass}"
{...$$restProps}
>
<path d="M23 19.0002H22V9.00015H18V6.58594L12 0.585938L6 6.58594V9.00015H2V19.0002H1V21.0002H23V19.0002ZM6 19.0002H4V11.0002H6V19.0002ZM18 11.0002H20V19.0002H18V11.0002ZM11 12.0002H13V19.0002H11V12.0002Z"></path>
</svg>
