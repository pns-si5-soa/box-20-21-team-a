require("dotenv").config()
import Payload from "../app/aggregate/Payload";
import payloadController from "../app/controller/PayloadController";
import PayloadStatus from "../app/entities/PayloadStatus";

test('not launched payload init values', () => {
    const payload = new Payload("56776544");
    expect(payload.payloadData.toObjectJSON().altitude).toBe(0);
    expect(payload.payloadData.toObjectJSON().speed).toBe(0);
    expect(payload.payloadData.toObjectJSON().payloadStatus).toBe(PayloadStatus.ATTACHED);

});

test('detach process', async ()  => {
    payloadController.addNewPayload("56776544")
    await payloadController.detachThePayload("56776544");
    const datas = payloadController.payloads["56776544"].payloadData.toObjectJSON();
    expect(datas.altitude).toBeLessThanOrEqual(36000);
    expect(datas.payloadStatus).toBe(PayloadStatus.DETACHED);
});
