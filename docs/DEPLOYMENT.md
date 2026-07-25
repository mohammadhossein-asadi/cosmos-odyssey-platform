# Deployment

## Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

## Manual

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| NODE_ENV | production/development |
| SITE_URL | Site base URL |

## Performance

- Lighthouse score target: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
