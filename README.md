# Walker Environmental Research Website

Source for the Walker Environmental Research Quarto website.

## Setup

Install [Quarto](https://quarto.org/docs/get-started/) and clone this repository:

```sh
git clone <repository-url>
cd website
```

No project-specific package install is currently required.

## Development

Preview the site locally with live reload:

```sh
quarto preview
```

Render the static site into `_site/`:

```sh
quarto render
```

The site configuration lives in `_quarto.yml`. Shared styling lives in `theme.scss` and `styles.css`.

## Deployment

Build the site, then run the deployment script:

```sh
quarto render
./deploy.sh
```

`deploy.sh` uses `rsync` to publish `_site/` to `jeff@walkerenvres.com:/var/www/home/` and deletes remote files that no longer exist locally.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
