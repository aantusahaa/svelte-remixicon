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
class="remixicon ri-signal-cellular-off-fill {customClass}"
{...$$restProps}
>
<path d="M22.207 20.793L20.793 22.207L19.5859 21H16V17.4141L15 16.4141V21H9V10.4141L1.79297 3.20703L3.20703 1.79297L22.207 20.793ZM8 21H2V13H8V21ZM22 17.7578L16 11.7578V3H22V17.7578ZM15 10.7578L12.2422 8H15V10.7578Z"></path>
</svg>
