import Payload from "../app/entities/Payload";
import PayloadStatus from "../app/entities/PayloadStatus";

test('not launched payload init values', () => {
    const payload = new Payload();
    expect(payload.toObjectJSON().altitude).toBe(0);
    expect(payload.toObjectJSON().speed).toBe(0);
    expect(payload.toObjectJSON().status).toBe(PayloadStatus.ATTACHED);

});

test('detach process', async ()  => {
    const payload = new Payload();
    payload.setSleepTime(1);
    await payload.detach();
    const datas = payload.toObjectJSON();
    expect(datas.altitude).toBeLessThanOrEqual(36000);
    expect(datas.status).toBe(PayloadStatus.DETACHED);
});
