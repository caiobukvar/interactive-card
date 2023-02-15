import {
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

function CardNumberInput({ input, setInput }) {
  const handleInputChange = (e) => setInput({ cardNumber: e.target.value })

  const isError = input.cardNumber === ''

  return (
    <>
      <FormLabel>Card number</FormLabel>
      <Input
        type='text'
        value={input.cardNumber}
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={handleInputChange}
      />
      {isError && (
        <FormErrorMessage>Card number is required.</FormErrorMessage>
      )}
    </>
  );
}

export default CardNumberInput;