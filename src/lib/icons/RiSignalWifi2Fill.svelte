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
class="remixicon ri-signal-wifi-2-fill {customClass}"
{...$$restProps}
>
<path d="M12.001 3C16.2854 3 20.2201 4.49683 23.3108 6.99607L12.001 21L0.69043 6.99671C3.78127 4.49709 7.71632 3 12.001 3ZM12.001 5C8.97344 5 6.07837 5.84185 3.58046 7.39179L6.759 11.327C8.31734 10.4807 10.103 10 12.001 10C13.8988 10 15.6843 10.4806 17.2425 11.3267L20.4208 7.39132C17.9231 5.84167 15.0283 5 12.001 5Z"></path>
</svg>
