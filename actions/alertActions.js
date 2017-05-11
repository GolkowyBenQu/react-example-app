export function alertAction() {
  alert('abc')
  return {
    type: 'ALERT_ACTION',
    id: 1
  }
}