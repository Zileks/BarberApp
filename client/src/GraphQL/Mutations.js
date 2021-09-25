import {gql} from '@apollo/client';

export const CREATE_DATE_MUTATION = gql`

    mutation createDate($barber: String! $date: String! $time: String! $email: String! $customer: String! $phone: String!) {
        createDate(barber: $barber date: $date time: $time email: $email customer: $customer phone: $phone) {
            id,
            barber,
            date,
            time,
            email,
            customer,
            phone
        }
    }

`