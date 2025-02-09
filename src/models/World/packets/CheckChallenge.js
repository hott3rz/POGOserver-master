import POGOProtos from "pkmngo-protobuf";

/**
 * @param {Object} msg
 */
export default function CheckChallenge(msg) {

  let buffer = {
    challenge_url: " "
  };

  return (
    POGOProtos.serialize(buffer, "POGOProtos.Networking.Responses.CheckChallengeResponse")
  );

}