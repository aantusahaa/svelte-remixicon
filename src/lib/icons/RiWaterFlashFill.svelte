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
class="remixicon ri-water-flash-fill {customClass}"
{...$$restProps}
>
<path d="M5.64092 6.63886L12.0049 0.274902L18.3688 6.63886C21.8836 10.1536 21.8836 15.8521 18.3688 19.3668C14.8541 22.8815 9.15564 22.8815 5.64092 19.3668C2.1262 15.8521 2.1262 10.1536 5.64092 6.63886H5.64092ZM13.0049 11.0028V6.50282L8.50488 13.0028H11.0049V17.5028L15.5049 11.0028H13.0049Z"></path>
</svg>
