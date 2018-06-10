export class Event
{
    Code: number;

    constructor(code: number)
    {
        this.Code = code;
    }
}

export declare type EventHandler = (e: Event) => Promise<boolean>;

export class EventSubscription
{    
    Code: number;
    Handler: EventHandler;
}

export class EventNotifier
{
    protected EventHandlers = new Array<EventSubscription>();

    SubscribeToEvent(code: number, handler: EventHandler)
    {				
        this.EventHandlers.push({ Code: code, Handler: handler });
    }

    UnsubscribeFromEvent(code: number, handler: EventHandler)
    {
        for (let i = 0; i < this.EventHandlers.length; i++)
        {
            if ((this.EventHandlers[i].Code == code) && (this.EventHandlers[i].Handler == handler))
            {
                this.EventHandlers.splice(i, 1);
                break;
            }
        }
    }
                
    NotifyEventSubscribers(event: Event)
    {
        for (let i = 0; i < this.EventHandlers.length; i++)
        {
            if ((this.EventHandlers[i].Code == event.Code) && (this.EventHandlers[i].Handler != null))
            {
                this.EventHandlers[i].Handler(event);
            }
        }
    }
}