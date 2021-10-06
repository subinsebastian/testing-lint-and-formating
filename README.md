below configuration makes sure stylelint runs prettier while it is link fixing ie.
`npx stylelint './**/*.css' --fix` actually runs stylelint and formats using prettier using below configuration

```json
{
	"extends": ["stylelint-prettier/recommended"]
}
```

so the two commands to run both linting and formating are

1. `prettier-eslint --write 'src/**/*.{js,jsx}'`
2. `npx stylelint './**/*.css' --fix`
