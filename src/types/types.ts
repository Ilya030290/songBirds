export type BirdsSectionsTitleType = "Разминка" | "Воробьиные" | "Лесные птицы" | "Певчие птицы" | "Хищные птицы";

export type BirdsSectionType = {
    id: number
    title: string
    birds: BirdType[]
};

export type BirdType = {
    id: number
    name: string
    species: string
    description: string
    image: string
    audio: string
};

export type Indicator = {
    id: number
    status: string
};

export type defaultData = {
    image: string
    name: string
};

export type initialStateType = {
    defaultBirdData: defaultData
    birdsData: BirdsSectionType[]
    indicators: Indicator[]
    currentLevel: number
    score: number
    currentLevelScore: number
    isButtonDisabled: boolean
    isMatch: boolean
    isFinished: boolean
    clickedOptionsIDs: number[]
    questionBirdID: number | null
    descriptionBirdID: number | null
    fail?: HTMLAudioElement
    success?: HTMLAudioElement
};
