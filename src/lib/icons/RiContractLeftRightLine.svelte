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
<path d="M18.7933 5.79297 12.5862 12.0001 18.7933 18.2072 20.2075 16.793 15.4146 12.0001 20.2075 7.20718 18.7933 5.79297ZM5.20718 18.2073 11.4143 12.0002 5.20718 5.79312 3.79297 7.20733 8.58586 12.0002 3.79297 16.7931 5.20718 18.2073Z"></path>
</svg>
