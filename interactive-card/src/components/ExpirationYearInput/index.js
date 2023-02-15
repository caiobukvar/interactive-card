import {
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

function ExpirationYearInput({ input, setInput }) {
  const handleInputChange = (e) => setInput({ expDateYY: e.target.value })
  const isError = input.expDateYY === ''
  return (
    <>
      <Input
        type='number'
        max={2100}
        value={input.expDateYY}
        placeholder="YY"
        onChange={handleInputChange}
      />
      {isError && (
        <FormErrorMessage>Expiration year required.</FormErrorMessage>
      )}
    </>
  );
}

export default ExpirationYearInput;