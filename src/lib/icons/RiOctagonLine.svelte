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
class="remixicon ri-octagon-line {customClass}"
{...$$restProps}
>
<path d="M15.936 2.50098L21.501 8.06595V15.936L15.936 21.501H8.06595L2.50098 15.936V8.06595L8.06595 2.50098H15.936ZM15.1076 4.50098H8.89437L4.50098 8.89437V15.1076L8.89437 19.501H15.1076L19.501 15.1076V8.89437L15.1076 4.50098Z"></path>
</svg>
