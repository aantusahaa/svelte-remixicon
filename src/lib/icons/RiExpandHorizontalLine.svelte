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
class="remixicon ri-expand-horizontal-line {customClass}"
{...$$restProps}
>
<path d="M0.5 12L5.44975 7.05023L6.86396 8.46445L4.32843 11H10V13H4.32843L6.86148 15.533L5.44727 16.9472L0.5 12ZM14 13H19.6708L17.1358 15.535L18.55 16.9492L23.5 11.9995L18.5503 7.04974L17.136 8.46396L19.6721 11H14V13Z"></path>
</svg>
