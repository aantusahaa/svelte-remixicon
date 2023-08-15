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
class="remixicon ri-skip-up-line {customClass}"
{...$$restProps}
>
<path d="M12.0001 13.9142L16.793 18.7071L18.2072 17.2929L12.0001 11.0858L5.79297 17.2929L7.20718 18.7071L12.0001 13.9142ZM6.00008 7L18.0001 7V9L6.00008 9L6.00008 7Z"></path>
</svg>
