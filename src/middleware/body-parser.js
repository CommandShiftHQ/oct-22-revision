module.exports = (req, res, next) => {
    const chunks = []
    req.on("data", (chunk) => {
        chunks.push(chunk)
    })
    req.on("end", () => {
        if (chunks.length > 0) {
            const body = Buffer.concat(chunks).toString()

            try {
                req.body = JSON.parse(body)
            } catch (err) {
                res.status(400).json("bad json")
            }
        }
        next()
    })
}