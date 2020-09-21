export default function getInviteLink(account): string {
  const url = new URL(`${window.location.origin}/pool?referrer=${account}`)
  return url.href
}
