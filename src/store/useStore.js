import { create } from 'zustand';

export const useStore = create((set) => ({
    boshlanmagan: [
        { id: 'b1', text: 'Boshlanmagan 1' },
        { id: 'b2', text: 'Boshlanmagan 2' },
        { id: 'b3', text: 'Boshlanmagan 3' },
    ],
    jarayonda: [
        { id: 'j1', text: 'Jarayonda 1' },
        { id: 'j2', text: 'Jarayonda 2' },
        { id: 'j3', text: 'Jarayonda 3' },
    ],
    tugallangan: [
        { id: 't1', text: 'Tugallangan 1' },
        { id: 't2', text: 'Tugallangan 2' },
        { id: 't3', text: 'Tugallangan 3' },
    ],

    moveCard: (from, to, id) => set((state) => {
        const card = state[from].find((c) => c.id === id);
        if (!card) return state;
        return {
            ...state,
            [from]: state[from].filter((c) => c.id !== id),
            [to]: [...state[to], card],
        };
    }),
}));
