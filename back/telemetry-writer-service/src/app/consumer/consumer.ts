import {run} from "./consumer_kafka"

export interface ISubscriptions {
    topic: String
    callback: (response: any) => void
}

export default class Consumer {

    private subscriptions : ISubscriptions[] = []

    append(topic_name: String, callback: (response: any) => void) {
        this.subscriptions.push({
            topic: topic_name,
            callback: callback
        })
    }

    subscribe() {
        run(this.subscriptions)
    }

}