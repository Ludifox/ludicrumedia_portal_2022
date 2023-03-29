import dayjs from "dayjs";
import { writeClient } from "../client";

export async function updateWorklog(id, b, d, t) {
    const result = await writeClient.patch(id).setIfMissing({worklog: []})
    .append("worklog", [{beskrivelse: b, dato: dayjs(d, "YYYY-MM-DD"), timer: Number(t)}]).commit({autoGenerateArrayKeys: true})
    .then(() => {return 1})
    .catch((err) => {console.error("Worklog save failed: ", err.message)})
    return result
}