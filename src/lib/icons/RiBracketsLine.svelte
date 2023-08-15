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
class="remixicon ri-brackets-line {customClass}"
{...$$restProps}
>
<path d="M9 3V5H6V19H9V21H4V3H9ZM15 3H20V21H15V19H18V5H15V3Z"></path>
</svg>
