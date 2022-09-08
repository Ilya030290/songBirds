export const indicatorStatus = {
    default: 'default',
    fail: 'fail',
    success: 'success',
};

export const indicators = [
    { id: 1, status: indicatorStatus.default },
    { id: 2, status: indicatorStatus.default },
    { id: 3, status: indicatorStatus.default },
    { id: 4, status: indicatorStatus.default },
    { id: 5, status: indicatorStatus.default },
    { id: 6, status: indicatorStatus.default },
];

export const LOADING = 'loading' as const;
export const SUCCESS = 'success' as const;
export const FAILED = 'failed' as const;

export const MAX_CURRENT_SCORE = 5;
export const MAX_CURRENT_LEVEL = 5;
export const MAX_SCORE = 30;



