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
class="remixicon ri-arrow-left-up-long-line {customClass}"
{...$$restProps}
>
<path d="M19.7784 18.3641L18.3644 19.7783L6.92908 8.34305V13.9288H4.92908L4.92908 4.9288L13.9291 4.9288L13.9291 6.9288L8.34326 6.9288L19.7784 18.3641Z"></path>
</svg>
