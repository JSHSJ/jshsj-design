# JSHSJ Design

> [!NOTE]
>
> This repository is now deprecated in favor of https://github.com/nordcode-agency/nordcode/tree/main/packages/ui
>
> You can also download it on npm: https://www.npmjs.com/package/@nordcode/ui

My own branding used across projects.
Made for better reusability accross my projects. Contains my commonly used things.

## Structure

* `src`: contains unprocessed styles, should be processed by postcss. Exported through `/postcss/{filename}`
* `out`: contains processed styles, already processed by postcss. Exported through `/{filename}`
* `assets`: contains assets, as in fonts and images. Should be copied somewhere sensible

### Copy assets

    cp -r node_modules/@jshsj/design/assets public/assets

There is also a fonts.css file included, you might need to move and edit that.

## Licensing

You can use these styles freely, if you want.

Note, however, that (some of) the fonts need a license, which you probably don't have.
