import POGOProtos from "pkmngo-protobuf";

import * as shared from "../../../shared";

/**
 * @param {Object} msg
 * @return {Buffer}
 */
export default function DownloadItemTemplates(msg) {
  return (
    shared.GAME_MASTER.serialize()
  );
}