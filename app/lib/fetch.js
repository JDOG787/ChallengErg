import axios from 'axios';

export default async function fetch(url, options) {
    try {
        const res = await axios(url, options)
        return res.data
    } catch (err) {
        console.log("Fetch Error ", err)
        // return err
    }
}