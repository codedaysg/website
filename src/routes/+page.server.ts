import Airtable from "airtable";
import {env} from "$env/dynamic/private";

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        const data = await event.request.formData()
        const at = new Airtable({ apiKey: env.AIRTABLE_API_KEY }).base("appWeQ0BzozbhWUsn");
        console.log(data.get("email"))
        const email = data.get("email")
        at("Interest form").create(
            {
                Email: email,
            },
            function (err: any) {
                if (err) {
                    return { success: false }
                }
            }
        );
        return { success: true}
    }
};