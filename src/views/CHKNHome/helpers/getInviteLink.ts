export default function getInviteLink(account): string {
  const url = new URL(`${window.location.origin}/pool?refferer=${account}`)
  return url.href
}
