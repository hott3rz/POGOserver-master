import POGOProtos from "pkmngo-protobuf";

/**
 * @param {Object} msg
 * @return {Buffer}
 */
export default function GetHatchedEggs(msg) {

  let buffer = {
    success: true,
    pokemon_id: [],
    experience_awarded: [],
    candy_awarded: [],
    stardust_awarded: []
  };

  return (
    POGOProtos.serialize(buffer, "POGOProtos.Networking.Responses.GetHatchedEggsResponse")
  );

}