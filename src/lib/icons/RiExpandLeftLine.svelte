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
class="remixicon ri-expand-left-line {customClass}"
{...$$restProps}
>
<path d="M10.071 4.92896L11.4852 6.34317L6.82834 11L16.0002 11.0002L16.0002 13.0002L6.82839 13L11.4852 17.6569L10.071 19.0711L2.99994 12L10.071 4.92896ZM18.0001 19V4.99997H20.0001V19H18.0001Z"></path>
</svg>
