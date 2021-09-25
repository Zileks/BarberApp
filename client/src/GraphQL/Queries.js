import {gql} from '@apollo/client'

export const LOAD_DATES = gql`
    query PostDate{
        dates {
        id
        barber
        time
        date
        email
        customer
        phone
  }
}
`;
