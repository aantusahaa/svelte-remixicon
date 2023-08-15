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
class="remixicon ri-water-flash-line {customClass}"
{...$$restProps}
>
<path d="M12.0049 3.10333L7.05514 8.05308C4.32147 10.7867 4.32147 15.2189 7.05514 17.9526C9.78881 20.6862 14.221 20.6862 16.9546 17.9526C19.6883 15.2189 19.6883 10.7867 16.9546 8.05308L12.0049 3.10333ZM12.0049 0.274902L18.3688 6.63886C21.8836 10.1536 21.8836 15.8521 18.3688 19.3668C14.8541 22.8815 9.15564 22.8815 5.64092 19.3668C2.1262 15.8521 2.1262 10.1536 5.64092 6.63886L12.0049 0.274902ZM13.0049 11.0028H15.5049L11.0049 17.5028V13.0028H8.50488L13.0049 6.50282V11.0028Z"></path>
</svg>
