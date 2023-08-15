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
class="remixicon ri-contract-left-line {customClass}"
{...$$restProps}
>
<path d="M15.0713 4.92871L16.4856 6.34292L11.8287 10.9998L21.0006 10.9999L21.0005 12.9999L11.8287 12.9998L16.4856 17.6566L15.0714 19.0708L8.00028 11.9998L15.0713 4.92871ZM4.00049 18.9997L4.00049 4.99972H6.00049L6.00049 18.9997H4.00049Z"></path>
</svg>
