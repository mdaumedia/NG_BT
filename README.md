# NG Bootstrap + Storybook Scaffold

This repo provides a minimal NG Bootstrap environment for publishing UI stories in Storybook and linking back to Figma design specifications.

## What's included

- Storybook configured for Angular with the Designs addon.
- NG Bootstrap + Bootstrap 5 styling via `src/styles.scss`.
- A sample `Button` component and Storybook stories wired to a Figma URL placeholder.
- Platform design requirements for a Bloomberg-inspired signals UI.

## Getting started

```bash
npm install
npm run storybook
```

## Connecting Figma design specs

The `@storybook/addon-designs` addon lets you embed Figma references at the story level. Update the `url` value in each story's `design` parameter.

Example:

```ts
parameters: {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/your-file-id/your-design'
  }
}
```

## Platform design requirements

See the Bloomberg-inspired UI requirements in [`docs/platform-design-requirements.md`](docs/platform-design-requirements.md).

## Notes

- Update `src/lib/**` with new components and stories to expand the catalog.
- Add shared design tokens or theme overrides inside `src/styles.scss`.
