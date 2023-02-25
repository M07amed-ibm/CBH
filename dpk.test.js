const {
  deterministicPartitionKey,
  deterministicPartitionKeyRefactored,
} = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKeyRefactored();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partition key when given as a property of the event", () => {
    const candidate = deterministicPartitionKeyRefactored({ partitionKey: "hello" });
    expect(candidate).toBe("hello");
  });

  it("Returns a 128 length character hash when the event doesn't have the partiotion key", () => {
    const candidate = deterministicPartitionKeyRefactored({ partitionKeyy: "hello" });
    expect(candidate.length).toBe(128);
  });

  it("Returns the stringified JSON object when the partitionKey is in the event but is in JSON format not string", () => {
    const candidate = deterministicPartitionKeyRefactored({
      partitionKey: { key: "hello" },
    });
    expect(candidate).toBe(JSON.stringify({ key: "hello" }));
  });

  it("Returns a 128 length character hash when the event has the partiotion key but the partition key's length is more than 256", () => {
    const candidate = deterministicPartitionKeyRefactored({
      partitionKey: `ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0lihlhlhl`,
    });
    expect(candidate.length).toBe(128);
  });
});

//ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0
//ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0
