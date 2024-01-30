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
class="remixicon ri-expand-width-line {customClass}"
{...$$restProps}
>
<path d="M2 18L2 6H4L4 18H2ZM9.44975 7.05025L4.5 12L9.44727 16.9473L10.8615 15.5331L8.32843 13H15.6708L13.1358 15.535L14.55 16.9492L19.5 11.9995L14.5503 7.04976L13.136 8.46398L15.6721 11H8.32843L10.864 8.46447L9.44975 7.05025ZM20 6H22V18H20V6Z"></path>
</svg>
