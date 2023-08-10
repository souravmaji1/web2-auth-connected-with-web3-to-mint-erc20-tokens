import { Grid, GridItem } from '@chakra-ui/react'

export default function Cards() {
    return(
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='400' bg='blue.500' />
        <GridItem w='100%' h='400' bg='blue.500' />
        <GridItem w='100%' h='400' bg='blue.500' />
      </Grid>
    )
}