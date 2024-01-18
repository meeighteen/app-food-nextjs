import gql from "graphql-tag";

const getCountries = gql`
    query Countries {
        GetAllCountries: countries {
            code
            name
            emoji
        }
    }
`;

export {
    getCountries
}