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
class="remixicon ri-pentagon-fill {customClass}"
{...$$restProps}
>
<path d="M11.9999 0.700195L22.7468 8.5083L18.6418 21.1421H5.35789L1.25293 8.5083L11.9999 0.700195Z"></path>
</svg>
