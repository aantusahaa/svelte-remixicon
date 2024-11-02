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
class="remixicon ri-arrow-up-wide-fill {customClass}"
{...$$restProps}
>
<path d="M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.9679 14.8838L3.03212 13.1162L12 8.36853Z"></path>
</svg>
