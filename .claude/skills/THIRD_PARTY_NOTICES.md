# Third-Party Notices — vendored Claude Code skills

This directory contains skills vendored from third-party, community-maintained sources. They are
developer tooling for Claude Code only; they are not part of any shipped product and are never
served to end users.

## Humanizer (blader)

- **Project:** Humanizer — rewrites AI-sounding prose to read like a person wrote it, without
  changing what it says
- **Author:** blader (Siqi Chen)
- **Source:** https://github.com/blader/humanizer
- **License:** MIT (upstream `LICENSE` retained)
- **Pinned upstream commit:** `9862685f575c65a8247f90369951df1b3416e3d6` (v3.0.0)
- **Skill vendored:** `humanizer` — the whole upstream repo, a single self-contained `SKILL.md`
  with no bundled scripts or assets, so nothing was trimmed

**Where it applies here:** this repo is `README.md` — the family's public-facing overview. Run
the skill over draft edits to that page (and any future doc added here) before committing, so the
ecosystem description reads like a person wrote it rather than a template.

## Registration as a marketplace

`.claude/settings.json` registers `blader/humanizer` as a known Claude Code marketplace, so
`/plugin install humanizer@humanizer` can pull upstream's latest version for comparison. It is
**registered but not enabled**: enabling it alongside the vendored copy above would put two
skills named `humanizer` on the path at once.

## License compliance

Humanizer is MIT licensed, permitting commercial use, modification, and redistribution with
attribution. This repo retains the upstream `LICENSE` file in the skill directory.
