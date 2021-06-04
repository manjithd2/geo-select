import { countries } from '../../../../geoData/countries'

const country = (req, res) => {
    res.status(200).json(countries)
}

export default country