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
class="remixicon ri-arrow-turn-back-line {customClass}"
{...$$restProps}
>
<path d="M17.0004 18.1716L14.4649 15.636L13.0507 17.0503L18.0004 22L22.9502 17.0503L21.536 15.636L19.0004 18.1716V11C19.0004 6.58172 15.4187 3 11.0004 3C6.58216 3 3.00044 6.58172 3.00044 11V20H5.00044V11C5.00044 7.68629 7.68673 5 11.0004 5C14.3142 5 17.0004 7.68629 17.0004 11V18.1716Z"></path>
</svg>
