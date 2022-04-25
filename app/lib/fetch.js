import axios from 'axios';

export default async function fetch(url, options) {
    try {
        const res = await axios(url, options)

        return res.data
    } catch (err) {
        console.log("Fetch Error", err.message)
        // if (err == "[Error: Network Error]") {
            return {
                success: false,
                error: err.message
            }
        // }
    }
}