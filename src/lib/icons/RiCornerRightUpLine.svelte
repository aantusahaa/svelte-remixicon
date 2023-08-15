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
class="remixicon ri-corner-right-up-line {customClass}"
{...$$restProps}
>
<path d="M13.9999 19.0003L5.00003 19.0004L5 17.0004L11.9999 17.0003L12 6.82845L8.05027 10.7782L6.63606 9.36396L13 3L19.364 9.36396L17.9498 10.7782L14 6.8284L13.9999 19.0003Z"></path>
</svg>
