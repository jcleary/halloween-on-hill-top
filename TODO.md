# TODO

## Upgrade Ruby

- Jekyll is already on the latest stable release (4.4.1); there is no 5.x.
- `liquid`, `rouge`, `terminal-table`, `unicode-display_width` and `json` show as outdated in `bundle outdated`, but Jekyll 4.4 pins `liquid`/`rouge` to 4.x, so they can't move yet.
- Ruby is currently 3.2.2 (`.ruby-version`). Latest available in rbenv is 4.0.6 (3.4.10 / 3.3.12 are the latest of the older lines).
- Plan:
  1. Test the build on Ruby 3.4.x first (3.4.4 is already installed locally): `RBENV_VERSION=3.4.4 bundle install && bundle exec jekyll build`.
  2. If clean, update `.ruby-version` to 3.4.x.
  3. Optionally try 4.0.6 the same way; it is brand new, so old Sass/theme code is the likeliest thing to break.
- Not yet tested on 3.3, 3.4 or 4.0.

## CI workflows

- Update old actions: `actions/checkout@v2`/`@v3`, `actions/cache@v3` (deprecated), `jeffreytse/jekyll-deploy-action@v0.6.0`.
- The deploy action doesn't read `.ruby-version`, so check which Ruby it builds with.
- Dry-run workflow (`dry-run.yml`) only runs on PRs to `master`; open a PR to confirm the `build_only` fix works.

## Sass

- The theme's SCSS uses `/` for division (deprecated, removed in Dart Sass 2.0). Switch to `math.div()` or `calc()` before upgrading Sass to 2.0.
