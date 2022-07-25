export const ROUTES = [
    { path: '' },
    { path: '*' },
    { path: 'home' },
    {
        path: 'destination',
        children: [
            { path: '' },
            { path: 'moon' },
            { path: 'mars' },
            { path: 'europa' },
            { path: 'titan' },
        ],
    },
    {
        path: 'crew',
        children: [
            { path: '' },
            { path: 'commander' },
            { path: 'mission-specialist' },
            { path: 'pilot' },
            { path: 'flight-engineer' },
        ],
    },
    {
        path: 'technology',
        children: [
            { path: '' },
            { path: 'launch-vehicle' },
            { path: 'spaceport' },
            { path: 'space-capsule' },
        ],
    },
];
