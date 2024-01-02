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
class="remixicon ri-expand-left-fill {customClass}"
{...$$restProps}
>
<path d="M9.99994 4.99982V10.9998L16.0002 11.0002L16.0002 13.0002L9.99994 12.9998V18.9998L2.99994 12L9.99994 4.99982ZM18.0001 19V4.99999H20.0001V19H18.0001Z"></path>
</svg>
