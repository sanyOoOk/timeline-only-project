export interface HistoryEvent {
    year: number;
    description: string;
}
export interface HistoryItem {
    section: string;
    from: number;
    to: number;
    events: HistoryEvent[];
}
