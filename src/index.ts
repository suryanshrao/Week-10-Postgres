import { Client} from "pg";

async function getUser(email : string) {
    const client = new Client({
       connectionString : "postgresql://Suryansh_owner:xU9jJzW8GHFn@ep-tiny-wind-a5fr2lbt.us-east-2.aws.neon.tech/Suryansh?sslmode=require "
    })
}