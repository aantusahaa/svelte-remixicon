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
class="remixicon ri-contract-left-right-line {customClass}"
{...$$restProps}
>
<path d="M18.793 5.79285 12.5859 12 18.793 18.2071 20.2073 16.7928 15.4144 12 20.2073 7.20706 18.793 5.79285ZM5.20695 18.2072 11.4141 12.0001 5.20695 5.793 3.79274 7.20721 8.58563 12.0001 3.79274 16.793 5.20695 18.2072Z"></path>
</svg>
