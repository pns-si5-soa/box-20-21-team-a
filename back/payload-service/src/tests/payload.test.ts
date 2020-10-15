import Payload from "../app/aggregate/Payload";
import PayloadController from "../app/controller/PayloadController";
import PayloadStatus from "../app/entities/PayloadStatus";

test('not launched payload init values', () => {
    const payload = new Payload();
    expect(payload.payloadData.toObjectJSON().altitude).toBe(0);
    expect(payload.payloadData.toObjectJSON().speed).toBe(0);
    expect(payload.payloadData.toObjectJSON().payloadStatus).toBe(PayloadStatus.ATTACHED);

});

test('detach process', async ()  => {
    const payloadController = new PayloadController();
    await payloadController.detachThePayload();
    const datas = payloadController.payload.payloadData.toObjectJSON();
    expect(datas.altitude).toBeLessThanOrEqual(36000);
    expect(datas.payloadStatus).toBe(PayloadStatus.DETACHED);
});
