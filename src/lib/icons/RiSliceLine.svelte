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
class="remixicon ri-slice-line {customClass}"
{...$$restProps}
>
<path d="M15.6909 12.9146L17.4587 14.6823C11.4482 20.6927 6.4985 20.6927 2.25586 19.2785L17.8122 3.72217L21.3477 7.2577L15.6909 12.9146ZM12.8625 12.9146L18.5193 7.2577L17.8122 6.55059L6.3145 18.0483C9.04606 18.1557 11.6722 17.1419 14.5808 14.6329L12.8625 12.9146Z"></path>
</svg>
