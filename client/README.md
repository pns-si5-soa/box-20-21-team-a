To run cli :
`npm run dev -- <args>`

Help : 
`npm run dev -- --help`

To get rocket status:
`npm run dev -- --service rocket --service_action get`

To get weather status:
`npm run dev -- --service weather --service_action get`

To create a poll:
`npm run dev -- --service mission --service_action create`

To modify the poll:
`npm run dev -- --service mission --service_action put --service_name rocket --vote true`
