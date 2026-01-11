# 2.9.0

- New Icons! (Check Remixicon changelog [v4.8.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.8.0))

# 2.8.0

- New Icons! (Check Remixicon changelog [v4.7.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.7.0))

# 2.7.1

- Update dev dependencies.

# 2.7.0

- New Icons! (Check Remixicon changelog [v4.6.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.6.0))

# 2.6.1

- Update dev dependencies.

# 2.6.0

- New Icons! (Check Remixicon changelog [v4.5.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.5.0) & [v4.4.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.4.0))

# 2.5.0

- New Icons! ([Check Remixicon changelog v4.3.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.3.0))

# 2.4.1

- Add svelte 5 as peer dependency.

# 2.4.0

- New Icons! ([Check Remixicon changelog v4.2.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.2.0))

# 2.3.0

- New Icons! ([Check Remixicon changelog v4.1.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v4.1.0))

# 2.2.0

- New Icons! ([Check Remixicon changelog from 3.6.0 to 4.0.0](https://github.com/Remix-Design/RemixIcon/releases))

# 2.1.0

- Brought back direct imports of components! Apparently I was wrong, sorry! :(
- A section has been added to the README on usage of events.

# 2.0.0

- Svelte 4 support!
- `label` prop (details available in README)
- New build process with `@sveltejs/package`
- Reduced package size! Thanks to `@sveltejs/package`
- Bunch of breaking changes! :(

### Breaking Changes

- **Direct import of components are no longer supported.** It's no longer needed anyway. Vite optimizes the newly added package once and from then on it's no longer takes time to compile in dev mode.
- **Component names are now prefixed with `Ri`.** One reason for doing this is to skip the workaround for invalid identifiers. There were only 4 but still I want to maintain consistency in the naming with remixicon. And the project is active again so who knows they might add more. It will also help to communicate that this component is an icon in larger component trees.
- **Forwarded `click` event is removed.** The purpose of these components is to be used as icons. Forwarding a `click` event from a non interactive element promotes bad practice against HTML semantics. If you want to have a `click` event on an icon, wrap it in a `button` or `a` tag and add the event handler there. And for non interactive elements use it with appropriate role and aria attributes. This will ensure that your app is accessible to everyone.

# 1.5.0

- New Icons! ([Check Remixicon changelog from 3.4.0 to 3.5.0](https://github.com/Remix-Design/RemixIcon/releases))

# 1.3.0

- New Icons! ([Check Remixicon changelog v3.3.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v3.3.0))

# 1.2.0

- New Icons! ([Check Remixicon changelog v3.2.0](https://github.com/Remix-Design/RemixIcon/releases/tag/v3.2.0))

# 1.1.0

- New Icons! ([Check Remixicon changelog up to v3.1.1](https://github.com/Remix-Design/RemixIcon/releases))

# 1.0.1

- Rename `BookMark` to `BookBookMark` to avoid confusion with `Bookmark` [#1](https://github.com/aantusahaa/svelte-remixicon/pull/1)

# 1.0.0

- Initial Release
