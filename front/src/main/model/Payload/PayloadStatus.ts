enum PayloadStatus{
    ATTACHED  = 0,
    IN_PROGRESS = 1,
    DETACHED = 2 ,

}

export const mapStatusToText = {
    0: "Attached to the rocket",
    1: "Progressing to orbital position",
    2: "In orbit"
};

export default PayloadStatus;