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
class="remixicon ri-swap-fill {customClass}"
{...$$restProps}
>
<path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM7.00488 9.00275H9.00488V13.0027H11.0049V9.00275H13.0049L10.0049 5.50275L7.00488 9.00275ZM17.0049 15.0027H15.0049V11.0027H13.0049V15.0027H11.0049L14.0049 18.5027L17.0049 15.0027Z"></path>
</svg>
