require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_NAME = "crmdb";
const COLLECTION_NAME = "leads";
const PREFIX_PATTERN = /^(?:\s*M\s*\/\s*S\.?\s+)+(?=\S)/i;
const APPLY_CHANGES = process.argv.includes("--apply");
const BATCH_SIZE = 500;

async function main() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured");
  }

  await mongoose.connect(process.env.MONGO_URI);

  const collection = mongoose.connection
    .getClient()
    .db(DATABASE_NAME)
    .collection(COLLECTION_NAME);

  const filter = {
    name: { $type: "string", $regex: PREFIX_PATTERN },
  };
  const affectedBefore = await collection.countDocuments(filter);

  console.log(`Target: ${DATABASE_NAME}.${COLLECTION_NAME}.name`);
  console.log(`Records beginning with M/s: ${affectedBefore}`);

  if (!APPLY_CHANGES) {
    console.log("Dry run only. Re-run with --apply to update these records.");
    return;
  }

  let matchedCount = 0;
  let modifiedCount = 0;
  let operations = [];

  const flush = async () => {
    if (!operations.length) return;

    const result = await collection.bulkWrite(operations, { ordered: false });
    matchedCount += result.matchedCount;
    modifiedCount += result.modifiedCount;
    operations = [];
  };

  const cursor = collection.find(filter, { projection: { _id: 1, name: 1 } });
  for await (const lead of cursor) {
    const normalizedName = lead.name.replace(PREFIX_PATTERN, "").trim();

    operations.push({
      updateOne: {
        filter: { _id: lead._id, name: lead.name },
        update: { $set: { name: normalizedName } },
      },
    });

    if (operations.length >= BATCH_SIZE) {
      await flush();
    }
  }

  await flush();

  const affectedAfter = await collection.countDocuments(filter);
  console.log(`Matched during update: ${matchedCount}`);
  console.log(`Modified: ${modifiedCount}`);
  console.log(`Records still beginning with M/s: ${affectedAfter}`);

  if (affectedAfter !== 0) {
    throw new Error("Validation failed: prefixed lead names remain");
  }
}

main()
  .catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
