export const AUTH = `
query ($uuid: uuid, $code: String) {
  auth (uuid: $uuid, code: $code)
}
`
