export const useBackgroundColor = key => {
  const options = {
    // color: 'bg-color',
    primary: 'bg-primary',
    secondary: 'bg-secondary'
  }
  return options[key]
}
