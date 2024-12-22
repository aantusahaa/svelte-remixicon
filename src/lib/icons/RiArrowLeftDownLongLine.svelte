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
class="remixicon ri-arrow-left-down-long-line {customClass}"
{...$$restProps}
>
<path d="M19.7784 5.63589L18.3644 4.22168L6.92908 15.6569L6.92908 10.0712H4.92908L4.92908 19.0712L13.9291 19.0712V17.0712L8.34326 17.0712L19.7784 5.63589Z"></path>
</svg>
