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
class="remixicon ri-alibaba-cloud-line {customClass}"
{...$$restProps}
>
<path d="M5 5C2.79086 5 1 6.79086 1 9V15C1 17.2091 2.79086 19 5 19H9L8 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H8L9 5H5ZM16 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17H16L15 19H19C21.2091 19 23 17.2091 23 15V9C23 6.79086 21.2091 5 19 5H15L16 7ZM8 13H16V11H8V13Z"></path>
</svg>
