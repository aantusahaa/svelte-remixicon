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
class="remixicon ri-service-bell-fill {customClass}"
{...$$restProps}
>
<path d="M15 3V5H13V6.04938C18.0533 6.5511 22 10.8147 22 16H2C2 10.8147 5.94668 6.5511 11 6.04938V5H9V3H15ZM23 20V18H1V20H23Z"></path>
</svg>
