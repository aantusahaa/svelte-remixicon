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
class="remixicon ri-area-chart-line {customClass}"
{...$$restProps}
>
<path d="M15.1162 5.87598L21 3.52344V20H3V4.32324L9.11719 1.87598L15.1162 5.87598ZM5 14.5654V18H19V12.4766L15.0312 14.0645L9.12012 12.0938L5 14.5654ZM5 5.67676V12.2334L8.87988 9.90625L14.9678 11.9355L19 10.3223V6.47656L14.8828 8.12402L8.88281 4.12305L5 5.67676Z"></path>
</svg>
