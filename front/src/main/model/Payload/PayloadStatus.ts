enum PayloadStatus{
    ATTACHED  = 0,
    IN_PROGRESS = 1,
    DETACHED = 2 ,

}

export const mapStatus = ["Attached to the rocket","Progressing to orbital position","In orbit"]

export default PayloadStatus;