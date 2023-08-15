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
class="remixicon ri-signal-wifi-error-fill {customClass}"
{...$$restProps}
>
<path d="M12.001 3C16.2854 3 20.2201 4.49683 23.3108 6.99607L22.4994 8H18.001L18.0004 13.571L12.001 21L0.69043 6.99671C3.78127 4.49709 7.71632 3 12.001 3ZM22.001 19V21H20.001V19H22.001ZM22.001 10V17H20.001V10H22.001Z"></path>
</svg>
