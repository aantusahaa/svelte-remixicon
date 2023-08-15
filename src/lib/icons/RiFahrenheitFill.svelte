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
class="remixicon ri-fahrenheit-fill {customClass}"
{...$$restProps}
>
<path d="M12 12H19V14H12V21H10V8C10 5.79086 11.7909 4 14 4H21V6H14C12.8954 6 12 6.89543 12 8V12ZM4.5 10C2.567 10 1 8.433 1 6.5C1 4.567 2.567 3 4.5 3C6.433 3 8 4.567 8 6.5C8 8.433 6.433 10 4.5 10ZM4.5 8C5.32843 8 6 7.32843 6 6.5C6 5.67157 5.32843 5 4.5 5C3.67157 5 3 5.67157 3 6.5C3 7.32843 3.67157 8 4.5 8Z"></path>
</svg>
