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
class="remixicon ri-signal-wifi-off-fill {customClass}"
{...$$restProps}
>
<path d="M2.80864 1.39355L20.4863 19.0712L19.0721 20.4854L15.3894 16.8026L12.001 21.0002L0.69043 6.99686C1.60456 6.25759 2.59253 5.60601 3.64156 5.05491L1.39443 2.80777L2.80864 1.39355ZM12.001 3.00016C16.2854 3.00016 20.2201 4.49699 23.3108 6.99623L17.9044 13.6892L7.72553 3.511C9.09596 3.17714 10.5278 3.00016 12.001 3.00016Z"></path>
</svg>
