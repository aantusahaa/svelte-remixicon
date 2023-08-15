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
class="remixicon ri-arrow-left-down-line {customClass}"
{...$$restProps}
>
<path d="M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z"></path>
</svg>
