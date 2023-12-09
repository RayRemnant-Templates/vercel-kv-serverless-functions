//remove the "_" in the file name and test locally to see if the variables are set

export default async (req, res) => {

    let one = process.env.KV_REST_API_READ_ONLY_TOKEN
    let two = process.env.KV_REST_API_TOKEN
    let three = process.env.KV_REST_API_URL
    let four = process.env.KV_URL

    res.send(`env variables ${one}\n ${two}\n, ${three}\n, ${four}`)
}
