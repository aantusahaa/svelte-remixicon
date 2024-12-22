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
class="remixicon ri-arrow-down-long-fill {customClass}"
{...$$restProps}
>
<path d="M12.9999 1.99974L11 1.9996L11 15.5858H5.58582L12 22L18.4142 15.5858L13 15.5858L12.9999 1.99974Z"></path>
</svg>
