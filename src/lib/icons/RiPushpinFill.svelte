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
class="remixicon ri-pushpin-fill {customClass}"
{...$$restProps}
>
<path d="M22.3126 10.1752L20.8984 11.5894L20.1913 10.8823L15.9486 15.125L15.2415 18.6605L13.8273 20.0747L9.58466 15.8321L4.63492 20.7818L3.2207 19.3676L8.17045 14.4179L3.92781 10.1752L5.34202 8.76101L8.87756 8.0539L13.1202 3.81126L12.4131 3.10416L13.8273 1.68994L22.3126 10.1752Z"></path>
</svg>
