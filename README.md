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

## Note

---

Running the `prettier-eslint --write 'src/**/*.{js,jsx}'` pretifies the issue,
you can mark lint issues as error in rules, but above command won't fix them, it will only fix issues like

```ts
var abc = 'pqr';
```

and fix it to

```ts
const abc = 'pqr';
```

It cannot fix imports

```ts
import * as env from '../environments';
```

where the errors is: `'env' is defined but never used.eslintno-unused-vars`

**Since this will require us to manually comment it out**
