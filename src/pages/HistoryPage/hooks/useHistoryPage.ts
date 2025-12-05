import { useState } from "react";
import historyData from "../data.json";
import type { HistoryItem } from "../type/HistoryItem";

export const useHistoryPage = () => {
    const [items] = useState<HistoryItem[]>(historyData.historyItems);
    const [selectedItem, setSelectedItem] = useState(0);

    const toggleLeft = () => {
        setSelectedItem((prev) => {
            if (prev === 0) return prev;
            return prev - 1;
        });
    };

    const toggleRight = () => {
        setSelectedItem((prev) => {
            if (prev === items.length - 1) return prev;
            return prev + 1;
        });
    };

    const onItemClick = (item: number) => {
        if (item === selectedItem) return;
        setSelectedItem(item);
    };

    const setSelected = (i: number) => setSelectedItem(i);

    return {
        items,
        selectedItem,
        toggleLeft,
        toggleRight,
        onItemClick,
        setSelected,
    };
};
