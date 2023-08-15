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
class="remixicon ri-menu-unfold-fill {customClass}"
{...$$restProps}
>
<path d="M21 17.9996V19.9996H3V17.9996H21ZM17.0503 3.5498L22 8.49955L17.0503 13.4493V3.5498ZM12 10.9996V12.9996H3V10.9996H12ZM12 3.99955V5.99955H3V3.99955H12Z"></path>
</svg>
