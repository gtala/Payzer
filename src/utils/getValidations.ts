export const isValidEthAddress = (address: string): boolean => {
  const ethAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/
  return ethAddressRegex.test(address)
}

export const isValidValue = (input: string): boolean => {
  const positiveNumberRegex = /^\d+(\.\d+)?$/
  return positiveNumberRegex.test(input)
}
