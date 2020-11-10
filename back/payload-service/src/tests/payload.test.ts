require("dotenv").config()
import Payload from "../app/aggregate/Payload";
import payloadController from "../app/controller/PayloadController";
import PayloadStatus from "../app/entities/PayloadStatus";

test('not launched payload init values', () => {
    const payload = new Payload("56776544");
    expect(payload.payloadData.toObjectJSON().payloadStatus).toBe(PayloadStatus.ATTACHED);

});

test('detach process', async ()  => {
    payloadController.addNewPayload("56776544")
    await payloadController.detachThePayload("56776544");
    const data = payloadController.payloads["56776544"].payloadData.toObjectJSON();
    expect(data.payloadStatus).toBe(PayloadStatus.DETACHED);
});
