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
class="remixicon ri-code-s-fill {customClass}"
{...$$restProps}
>
<path d="M24 12.0001L18.3431 17.657L16.9289 16.2428L21.1716 12.0001L16.9289 7.75748L18.3431 6.34326L24 12.0001ZM2.82843 12.0001L7.07107 16.2428L5.65685 17.657L0 12.0001L5.65685 6.34326L7.07107 7.75748L2.82843 12.0001Z"></path>
</svg>
