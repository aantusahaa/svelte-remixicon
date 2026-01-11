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
class="remixicon ri-plug-3-line {customClass}"
{...$$restProps}
>
<path d="M17 22H7V20H17V22ZM10 5H14V2H16V5H20C20.5523 5 21 5.44772 21 6V15C21 17.2091 19.2091 19 17 19H7C4.79086 19 3 17.2091 3 15V6C3 5.44772 3.44772 5 4 5H8V2H10V5ZM5 15C5 16.1046 5.89543 17 7 17H17C18.1046 17 19 16.1046 19 15V7H5V15Z"></path>
</svg>
