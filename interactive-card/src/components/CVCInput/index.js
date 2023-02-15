import {
  FormErrorMessage,
  Input,
  FormLabel,
  VStack
} from '@chakra-ui/react'

function CVCInput({ input, setInput }) {
  const handleInputChange = (e) => setInput({ CVC: e.target.value })
  const isError = input.CVC === ''
  return (
    <VStack alignItems={'start'}>
      <FormLabel>CVC</FormLabel>
      <Input
        type='text'
        value={input.CVC}
        placeholder="e.g. 123"
        onChange={handleInputChange}
      />
      {isError && (
        <FormErrorMessage>CVC is required.</FormErrorMessage>
      )}
    </VStack>
  );
}

export default CVCInput;