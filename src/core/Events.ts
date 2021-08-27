import { BehaviorSubject } from "rxjs";

export const Events = {
    TextChange$: new BehaviorSubject<string>(""),
    ScrollChange$: new BehaviorSubject<number>(0),
};
