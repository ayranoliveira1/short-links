import { createClient } from "redis";

export const redis = createClient({
   url: "redis://docker:docker@localhost:6379",
});

redis.connect();
