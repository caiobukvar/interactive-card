import {
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

function ExpirationMonthInput({ input, setInput }) {
  const handleInputChange = (e) => setInput({ expDateMM: e.target.value })
  const isError = input.expDateMM === ''

  return (
    <>
      <Input
        type='number'
        max={31}
        value={input.expDateMM}
        placeholder="MM"
        onChange={handleInputChange}
      />
      {isError && (
        <FormErrorMessage>Expiration month required.</FormErrorMessage>
      )}
    </>
  );
}

export default ExpirationMonthInput;