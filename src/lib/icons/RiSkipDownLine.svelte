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
class="remixicon ri-skip-down-line {customClass}"
{...$$restProps}
>
<path d="M12.0001 10.0859L7.20718 5.29297L5.79297 6.70718L12.0001 12.9143L18.2072 6.70718L16.793 5.29297L12.0001 10.0859ZM18.0001 17.0001L6.00007 17.0001L6.00007 15.0001L18.0001 15.0001V17.0001Z"></path>
</svg>
