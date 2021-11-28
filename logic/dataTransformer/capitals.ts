export const transformArray = (data: any) => {
  if (data) {
    return data.sort(() => 0.5 - Math.random()).slice(0, 12)
  }
}
