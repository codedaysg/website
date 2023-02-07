import Airtable from "airtable";

export default function handler(req, res) {
    const body = req.body
    if (!body.Name || !body.Email) {
        return res.status(400).json({success: false})
    }
    const at = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base("appWeQ0BzozbhWUsn");
    const email = body.Email
    at("Interest form").create(
        {
            Name: body.Name,
            Email: email,
        },
        function (err) {
            if (err) {
                res.status(500).json({success: false})
                console.log(err)
            }
        }
    )
    res.status(200).json({ success: true })
}
